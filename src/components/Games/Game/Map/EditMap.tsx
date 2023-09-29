import { useQueries, useQueryClient } from '@tanstack/react-query';

import { useState } from 'react';
import { gameStore } from '../../../../store/gameStore';
import type { GameData } from '../../../../types/store/gameTypes';
import Map from './Map';
import { gameReportStore } from '../../../../store/gameReportStore';

function EditMap({ gameObj }: { gameObj: GameData }) {
  // perhaps this whole operation should be done in the EditGame component
  const queryClient = useQueryClient();

  const queryKey = ['mapsData'];

  const cachedData = queryClient.getQueryData(queryKey);

  if (!cachedData) {
    useQueries({
      queries: [
        {
          queryKey: ['mapsData'],
          queryFn: fetchMapsFromApi,
          onSuccess: (fetchedData: MapData[]) => {
            addMapsData(fetchedData);
          },
          staleTime: 1000 * 60 * 60 * 24 * 30,
          cacheTime: 1000 * 60 * 60 * 24 * 30 * 30,
        },
      ],
    });
  }

  const { selectedGame, selectedGameMap, selectGameMap } = gameStore();
  const { mapsData } = gameReportStore();

  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [currentMap, setCurrentMap] = useState<string>(gameObj.map);

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);
  const selectMap = (map: string) => {
    selectGameMap(map);
    setCurrentMap(map);
    setIsDropDownActive(false);
  };

  if (selectedGame.id !== gameObj.id) {
    return <Map gameObj={gameObj} />;
  }

  return (
    <div className="EditMap_container relative">
      Edit Map
      <div className="absolute top-9 right-0 w-full h-40">
        {mapsData.map((map) => (
          <p className="bg-fourthColor" key={map.id}>
            {map.label}
          </p>
        ))}
      </div>
    </div>
  );
}

export default EditMap;
