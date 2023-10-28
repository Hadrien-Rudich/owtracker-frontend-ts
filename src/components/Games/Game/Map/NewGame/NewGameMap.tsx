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

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);

  return (
    <div className="NewGameMap_container relative flexdiv w-[98%]">
      {mapErrorToast && (
        <ErrorToast
          toastText={mapErrorToastMessage}
          booleanProp={mapErrorToast}
          booleanPropSetter={setMapErrorToast}
          topProp="top-[-4rem]"
          leftProp="right-[13.75rem]"
        />
      )}
      <div className="w-full absolute top-[0.5rem] right-[-0.4rem] bg-activeColor">
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
                        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flexdiv px-1 bg-mainText bg-opacity-40 h-8 w-1/4">
                          <p className="text-xl absolute truncate tracking-wider text-secondaryText">
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
                    <p className="text-xl tracking-wider">MAP</p>
                  </div>
                </div>
              </button>
            )}
            <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewGameMap;
