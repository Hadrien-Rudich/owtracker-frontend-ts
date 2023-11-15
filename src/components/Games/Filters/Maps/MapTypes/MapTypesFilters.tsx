import { gameDataStore } from '../../../../../store/gameDataStore';
import { filterStore } from '../../../../../store/filterStore';
import ClearFilters from '../../ClearFilters';

function MapTypesFilters() {
  const { mapTypesData } = gameDataStore();
  const {
    activeFilter,
    filterMapType,
    unfilterMapType,
    filteredMapTypes,
    clearFilteredMapTypes,
  } = filterStore();

  const handleMapTypeClick = (mapType: string) => {
    if (filteredMapTypes.includes(mapType)) {
      unfilterMapType(mapType);
    } else {
      filterMapType(mapType);
    }
  };

  return (
    <div className="MapTypes_container h-full  bg-mainColor flexdiv col gap-4 justify-center w-[12rem] border-l-[0.125rem] border-ringColor">
      {mapTypesData.map((mtype) => (
        <div className="mapType_container" key={mtype.id}>
          <div className="flexdiv">
            <button
              type="button"
              value={mtype.label.toLowerCase()}
              className={`${
                filteredMapTypes.includes(mtype.label)
                  ? 'active'
                  : 'inactiveMapType '
              }  
            filter flexdiv  gap-2 rounded-sm`}
              onClick={() => handleMapTypeClick(mtype.label)}
            >
              <img
                className=" sm:h-6 sm:w-12 h-4 w-8 drop-shadow-md"
                src={`images/mapTypes/${`${mtype.imageUrl.replace(
                  '.svg',
                  '_black.svg'
                )}`}`}
                alt="map type icon"
              />
            </button>
          </div>
        </div>
      ))}

      {activeFilter === 'mapTypes' && filteredMapTypes.length > 0 && (
        <ClearFilters clearFilteredArray={clearFilteredMapTypes} />
      )}
    </div>
  );
}

export default MapTypesFilters;
