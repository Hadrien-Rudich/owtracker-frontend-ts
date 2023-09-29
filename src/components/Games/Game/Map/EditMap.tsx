import { useState } from 'react';
import { gameStore } from '../../../../store/gameStore';
import type { GameData } from '../../../../types/store/gameTypes';
import Map from './Map';

function EditMap({ gameObj }: { gameObj: GameData }) {
  const { selectedGame, selectedGameMap, selectGameMap } = gameStore();

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

  return <div>Edit Map</div>;
}

export default EditMap;
