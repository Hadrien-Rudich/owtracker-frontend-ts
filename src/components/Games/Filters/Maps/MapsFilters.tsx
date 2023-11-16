import { FaCheck } from 'react-icons/fa';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { gameDataStore } from '../../../../store/gameDataStore';
import Map from '../../Game/Map/Map';
import { filterStore } from '../../../../store/filterStore';
import ClearFilters from '../ClearFilters';

function MapsFilters() {
  const {
    activeFilter,
    clearFilteredMaps,
    clearFilteredMapTypes,
    filteredMapTypes,
    filterMapType,
    unfilterMapType,
    filteredMaps,
    filterMap,
    unfilterMap,
  } = filterStore();
  const { mapsData, mapTypesData } = gameDataStore();

  const handleMapTypeFilter = (mapType: string) => {
    if (filteredMapTypes.includes(mapType)) {
      unfilterMapType(mapType);
    } else {
      filterMapType(mapType);
    }
  };

  const handleMapFilter = (map: string) => {
    if (filteredMaps.includes(map)) {
      unfilterMap(map);
    } else {
      filterMap(map);
    }
  };

  return (
    <div className="Combined_container w-[72.75rem] h-full bg-mainColor border-l-[0.125rem] border-ringColor">
      <div className=" grid grid-cols-4 ">
        {mapTypesData.map((mtype) => (
          <div className={`order-${mtype.id} col_container col-span-1`}>
            <div className="mapType_container h-14 flexdiv" key={mtype.id}>
              <button
                className="flexdiv"
                type="button"
                value={mtype.label.toLowerCase()}
                onClick={() => handleMapTypeFilter(mtype.label)}
              >
                <img
                  className="sm:h-8 sm:w-20 h-4 w-8 drop-shadow-md"
                  src={`images/mapTypes/${`${mtype.imageUrl.replace(
                    '.svg',
                    '_black.svg'
                  )}`}`}
                  alt="map type icon"
                />{' '}
                {filteredMapTypes.includes(mtype.label) ? (
                  <MdOutlineKeyboardArrowUp className="w-5 h-5" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="filteredMaps_container flexdiv divide-y-2 divide-activeColor pb-[0.15rem]">
              {filteredMapTypes.includes(mtype.label) && (
                <div className="w-11/12 ">
                  {mapsData
                    .filter(
                      (map) => map.type === mtype.label.toLocaleLowerCase()
                    )
                    .map((map) => (
                      <div
                        key={map.label}
                        className="map_container h-8 relative"
                      >
                        <button
                          type="button"
                          className="w-full h-8"
                          onClick={() => handleMapFilter(map.label)}
                        >
                          {filteredMaps.includes(map.label) && (
                            <FaCheck className="absolute top-0 right-0 h-6 w-6 z-20  text-neonGreen" />
                          )}
                          <Map mapObj={map} imgHeight="h-8" />
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {activeFilter === 'maps' && filteredMaps.length > 0 && (
        <ClearFilters
          clearFilteredArray={clearFilteredMaps}
          clearSecondFilteredArray={clearFilteredMapTypes}
        />
      )}
    </div>
  );
}

export default MapsFilters;
