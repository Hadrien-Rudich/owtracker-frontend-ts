import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../store/gameStore';
import type { GameData } from '../../../../types/store/gameTypes';
import Map from './Map';
import { gameReportStore } from '../../../../store/gameReportStore';
import MapTypes from './MapTypes';

interface MapDropDownProps {
  gameObj: GameData;
  toggleDropDown: () => void;
}

function MapDropDown({ gameObj, toggleDropDown }: MapDropDownProps) {
  const {
    selectedGame,
    selectedGameMap,
    selectedGameMapType,
    selectGameMap,
    updateSelectedGame,
    clearSelectedGameMap,
    clearSelectedGameMapType,
  } = gameStore();
  const { mapsData } = gameReportStore();

  const [currentGame, setCurrentGame] = useState<GameData>(gameObj);

  const selectMap = (map: string, mapImage: string) => {
    selectGameMap(map, mapImage);
    updateSelectedGame({ ...selectedGame, map, mapImageUrl: mapImage });
    setCurrentGame({ ...selectedGame, map, mapImageUrl: mapImage });
    clearSelectedGameMap();
    clearSelectedGameMapType();
    toggleDropDown();
  };

  return (
    <div className="mapImage_container ring-2 bg-mainColor">
      <button
        className="w-full relative"
        type="button"
        onClick={toggleDropDown}
      >
        <div className="currentMap_container">
          <Map gameObj={currentGame} imgHeight="h-8" />
          <div className="absolute flexdiv top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  px-1 bg-mainText bg-opacity-40 h-6 w-1/4 ">
            <p className="text-xl truncate tracking-wider text-secondaryText text-center">
              {currentGame.map}
            </p>
          </div>
        </div>
      </button>
      <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />
      <div className="mapsDropDown_container grid grid-cols-3">
        <div className="MapTypes_container col-span-3 pt-4">
          <MapTypes />
        </div>
        <div className="filteredMaps_container col-span-3 flexdiv flex-wrap gap-1 py-4">
          {mapsData
            .filter((map) => map.type === selectedGameMapType)
            .map(
              (map) =>
                map.label.toLowerCase() !== gameObj.map.toLowerCase() && (
                  <button
                    className="sm:w-1/3 w-2/4"
                    key={map.id}
                    value={map.slug}
                    onClick={() => selectMap(map.label, map.imageUrl)}
                    type="button"
                  >
                    <div className="map_container flexdiv relative group">
                      <img src={`images/maps/${map.imageUrl}`} alt="map" />

                      <div
                        className={`${
                          selectedGameMap === map.slug
                            ? 'visible'
                            : ' invisible group-hover:visible'
                        } absolute bottom-0 right-[0.09rem] flexdiv bg-mainText bg-opacity-40`}
                      >
                        <p className="h-6 text-lg px-4 truncate tracking-wider text-secondaryText">
                          {map.label}
                        </p>
                      </div>
                    </div>
                  </button>
                )
            )}
        </div>
      </div>
    </div>
  );
}

export default MapDropDown;
