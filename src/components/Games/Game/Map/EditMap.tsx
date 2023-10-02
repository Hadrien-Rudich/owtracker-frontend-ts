import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../store/gameStore';
import type { GameData } from '../../../../types/store/gameTypes';
import Map from './Map';
import { gameReportStore } from '../../../../store/gameReportStore';

function EditMap({ gameObj }: { gameObj: GameData }) {
  const { selectedGame, selectedGameMap, selectGameMap } = gameStore();
  const { mapsData } = gameReportStore();
  const { isUpdatingGame } = gameStore();

  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [currentMap, setCurrentMap] = useState<string>(gameObj.map);

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);
  const selectMap = (map: string) => {
    selectGameMap(map);
    setCurrentMap(map);
    setIsDropDownActive(false);
  };

  if (selectedGame.id !== gameObj.id) {
    return <Map gameObj={gameObj} imgHeight="h-12" />;
  }

  return (
    <div className="EditMap_container relative flexdiv">
      <div className="w-full">
        {isDropDownActive ? (
          <div className="mapImage_container ring-2 flexdiv">
            <button
              className="w-full relative ring-2"
              type="button"
              onClick={toggleDropDown}
            >
              <div>
                <Map gameObj={gameObj} imgHeight="h-8" />
                <div className="absolute flexdiv top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  px-1 bg-mainText bg-opacity-40 h-6 w-1/4 ">
                  <p className="text-xl truncate tracking-wider text-secondaryText text-center">
                    {gameObj.map}
                  </p>
                </div>
              </div>
            </button>
            <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />

            <div className="absolute top-[2.1rem] right-0 w-full bg-activeColor ring-2">
              {mapsData.map(
                (map) =>
                  map.label.toLowerCase() !== currentMap.toLowerCase() && (
                    <Map mapObj={map} imgHeight="h-8" />
                  )
              )}
            </div>
          </div>
        ) : (
          <div className="mapimage_container flexdiv">
            <button
              className="w-full relative ring-2"
              type="button"
              onClick={toggleDropDown}
            >
              <Map gameObj={gameObj} imgHeight="h-8" />
              <div className="map_container flexdiv">
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flexdiv px-1 bg-mainText bg-opacity-40 w-1/4 h-6">
                  <p className="text-xl absolute truncate tracking-wider text-secondaryText">
                    {gameObj.map}
                  </p>
                </div>
              </div>
            </button>
            <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
}

export default EditMap;
