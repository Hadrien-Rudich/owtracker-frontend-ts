import { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../../store/gameStore';
import type { GameData } from '../../../../../types/store/gameTypes';
import Map from '../Map';
import { gameDataStore } from '../../../../../store/gameDataStore';
import MapTypes from '../MapTypes';

interface MapsDropDownProps {
  gameObj: GameData;
  toggleDropDown: () => void;
}

function MapsDropDown({ gameObj, toggleDropDown }: MapsDropDownProps) {
  const {
    selectedGame,
    selectedGameMapType,
    selectGameMap,
    updateSelectedGame,
  } = gameStore();

  const { mapsData } = gameDataStore();
  const [currentGame, setCurrentGame] = useState(gameObj);

  useEffect(() => {
    setCurrentGame((prevGame) => ({
      ...prevGame,
      map: selectedGame.map,
      mapImageUrl: selectedGame.mapImageUrl,
    }));
  }, [selectedGame.map, selectedGame.mapImageUrl]);

  const selectMap = (map: string, mapImage: string) => {
    selectGameMap(map, mapImage);
    updateSelectedGame({ ...selectedGame, map, mapImageUrl: mapImage });
    toggleDropDown();
  };

  return (
    <div className="mapImage_container w-full absolute top-[-1rem] ring-2  ring-thirdColor bg-mainColor">
      <button
        className="w-full relative"
        type="button"
        onClick={toggleDropDown}
      >
        <div className="currentMap_container">
          <Map gameObj={currentGame} imgHeight="h-8" />
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flexdiv px-1 bg-mainText bg-opacity-40 xl:w-1/4 md:w-1/2 w-full h-6">
            <p className="sm:text-lg text-base absolute truncate sm:tracking-widest text-secondaryText">
              {currentGame.map}
            </p>
          </div>
        </div>
      </button>
      <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none lg:block hidden" />
      <div className="mapsDropDown_container">
        <div className="MapTypes_container sm:h-14 h-10 flexdiv">
          <MapTypes />
        </div>
        <div className="filteredMaps_container flex flex-col divide-y-2 divide-activeColor pb-[0.15rem]">
          {mapsData
            .filter((map) => map.type === selectedGameMapType)
            .map(
              (map) =>
                map.label.toLowerCase() !== selectedGame.map.toLowerCase() && (
                  <div
                    key={(gameObj.id, map.label)}
                    className="map_container h-14"
                  >
                    <button
                      type="button"
                      className="w-full h-14"
                      onClick={() => selectMap(map.label, map.imageUrl)}
                    >
                      <Map mapObj={map} imgHeight="h-14" />
                    </button>
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
}

export default MapsDropDown;
