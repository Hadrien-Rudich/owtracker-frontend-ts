import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import MapsDropDown from './MapsDropDown';
import ErrorToast from '../../../../ErrorToast';
import { gameStore } from '../../../../../store/gameStore';
import { gameDataStore } from '../../../../../store/gameDataStore';
import Map from '../Map';

function NewGameMap() {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const { mapsData } = gameDataStore();
  const {
    selectedGameMap,
    mapErrorToast,
    mapErrorToastMessage,
    setMapErrorToast,
  } = gameStore();

  const toggleDropDown = () => {
    setMapErrorToast(false);
    setIsDropDownActive(!isDropDownActive);
  };
  return (
    <div className="NewGameMap_container flexdiv pl-[0.05rem] sm:pl-[0.25rem]">
      <div className="relative w-[95%] ">
        {mapErrorToast && (
          <ErrorToast
            toastText={mapErrorToastMessage}
            booleanProp={mapErrorToast}
            widthProp="sm:w-[50%] w-[100%]"
            topProp="sm:top-[-2.1rem] top-[-1.55rem]"
            centeringProp="sm:left-[25%] sm:right-[25%]"
          />
        )}
        <div className="w-full bg-activeColor">
          {isDropDownActive ? (
            <MapsDropDown toggleDropDown={toggleDropDown} />
          ) : (
            <div className="mapimage_container flexdiv">
              {selectedGameMap !== '' ? (
                <button
                  className="w-full relative ring-2"
                  type="button"
                  onClick={toggleDropDown}
                >
                  {mapsData
                    .filter((map) => map.label === selectedGameMap)
                    .map((mapObj) => (
                      <div key={mapObj.label}>
                        <Map mapObj={mapObj} imgHeight="h-8" />
                        <div className="map_container flexdiv">
                          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flexdiv px-1 bg-mainText bg-opacity-40  sm:h-6 h-5">
                            <p className="sm:text-lg text-base truncate text-secondaryText tracking-widest">
                              {mapObj.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </button>
              ) : (
                <button
                  className="w-full relative ring-2 flexdiv h-8"
                  type="button"
                  onClick={toggleDropDown}
                >
                  <div className="map_container flexdiv ">
                    <div className="flexdiv">
                      <p className="sm:text-lg text-base tracking-widest">
                        MAP
                      </p>
                    </div>
                  </div>
                </button>
              )}
              <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none lg:block hidden" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewGameMap;
