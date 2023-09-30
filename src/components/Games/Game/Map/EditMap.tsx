import { useState } from 'react';
import { gameStore } from '../../../../store/gameStore';
import type { GameData } from '../../../../types/store/gameTypes';
import Map from './Map';
import { gameReportStore } from '../../../../store/gameReportStore';

function EditMap({ gameObj }: { gameObj: GameData }) {
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
      {/* <div className="absolute top-9 right-0 w-full h-40">
        {mapsData.map((map) => (
          <p className="bg-fourthColor" key={map.id}>
            {map.label}
          </p>
        ))}
      </div> */}
    </div>
  );
}

export default EditMap;
