import { gameDataStore } from '../../../../../store/gameDataStore';
import { filterStore } from '../../../../../store/filterStore';

// import ClearHeroesFilters from './ClearHeroesFilters';

function MapTypesFilters() {
  const { mapTypesData } = gameDataStore();
  const { activeFilter, filterMap, unfilterMap, filteredMaps } = filterStore();

  const handleMapClick = (map: string) => {
    if (filteredMaps.includes(map)) {
      unfilterMap(map);
    } else {
      filterMap(map);
    }
  };

  return (
    <div className="MapTypes_container h-full bg-mainColor flexdiv">
      {mapTypesData.map((mtype) => (
        <div className="mapType_container" key={mtype.id}>
          <button
            type="button"
            value={mtype.label.toLowerCase()}
            className="flexdiv rounded-sm"
          >
            <img
              className="sm:h-8 sm:w-20 h-4 w-8 drop-shadow-md"
              src={`images/mapTypes/${`${mtype.imageUrl.replace(
                '.svg',
                '_black.svg'
              )}`}`}
              alt="map type icon"
            />
          </button>
        </div>
      ))}

      {/* {activeFilter === 'maps' && filteredHeroes.length > 0 && (
        <ClearHeroesFilters />
      )} */}
    </div>
  );
}

export default MapTypesFilters;
