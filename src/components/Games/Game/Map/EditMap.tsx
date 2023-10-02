import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../store/gameStore';
import type { GameData } from '../../../../types/store/gameTypes';
import Map from './Map';
import { gameReportStore } from '../../../../store/gameReportStore';
import { capitalizeFirstLetter } from '../../../../utils/utils';

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
    <div className="EditMap_container relative flexdiv">
      <div className="w-full">
        {isDropDownActive ? (
          <div className="mapImage_container ring-2 flexdiv">
            <button
              className="w-full relative ring-2"
              type="button"
              onClick={toggleDropDown}
            >
              <img
                className="h-8 w-full object-cover rounded-sm rounded-r-none"
                src={`images/maps/${gameObj.mapImageUrl}`}
                alt=""
              />
              <div className=" relative">
                <div className="flexdiv h-7 gap-4 absolute top-[-1rem] left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
                  <p className="flex items-center sm:h-12 sm:w-40 h-6 w-16 sm:text-lg sm:tracking-wider text-base truncate text-left">
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
                    <div className="mapimage_container">
                      <img
                        className="h-12 w-full object-cover rounded-sm rounded-r-none"
                        src={`images/maps/${map.imageUrl}`}
                        alt=""
                      />
                      <div className=" relative">
                        <div className="flexdiv gap-4 absolute top-[-1.5rem] left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
                          <p className="flex items-center sm:h-12 sm:w-40 h-6 w-16 sm:text-lg sm:tracking-wider text-base truncate text-left">
                            {map.label}
                          </p>
                        </div>
                      </div>
                    </div>
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
              <img
                className="h-8 w-full object-cover rounded-sm rounded-r-none"
                src={`images/maps/${gameObj.mapImageUrl}`}
                alt=""
              />
              <div className=" relative">
                <div className="flexdiv h-7 gap-4 absolute top-[-1rem] left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
                  <p className="flex items-center sm:h-12 sm:w-40 h-6 w-16 sm:text-lg sm:tracking-wider text-base truncate text-left">
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
