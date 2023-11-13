import { gameDataStore } from '../../../../../store/gameDataStore';
import { filterStore } from '../../../../../store/filterStore';
import Map from '../../../Game/Map/Map';

// import ClearHeroesFilters from './ClearHeroesFilters';

function MapsFilters() {
  const { mapsData } = gameDataStore();
  const { activeFilter, filterMap, unfilterMap, filteredMaps } = filterStore();

  const handleMapClick = (map: string) => {
    if (filteredMaps.includes(map)) {
      unfilterMap(map);
    } else {
      filterMap(map);
    }
  };

  return (
    <div className="MapsFilters_container">
      <div className="mapsDropDown_container">
        <div className="filteredMaps_container grid grid-cols-4 divide-y-2 divide-activeColor">
          {mapsData.map((map) => (
            <div key={(map.slug, map.label)} className="map_container h-8">
              <button
                type="button"
                className="w-full h-14"
                onClick={() => handleMapClick(map.label)}
              >
                <Map mapObj={map} imgHeight="h-14" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* {activeFilter === 'maps' && filteredHeroes.length > 0 && (
        <ClearHeroesFilters />
      )} */}
    </div>
  );
}

export default MapsFilters;
