import { gameDataStore } from '../../../../../store/gameDataStore';
import { filterStore } from '../../../../../store/filterStore';
import Map from '../../../Game/Map/Map';

function MapsFilters() {
  const { mapsData } = gameDataStore();
  const { filterMap, unfilterMap, filteredMaps } = filterStore();

  const handleMapClick = (map: string) => {
    if (filteredMaps.includes(map)) {
      unfilterMap(map);
    } else {
      filterMap(map);
    }
  };

  return (
    <div className="MapsFilters_container h-full border-l-[0.125rem] border-ringColor ">
      <div className="mapsDropDown_container flex flex-wrap divide-activeColor bg-mainColor h-full flexdiv w-[48rem]">
        {mapsData.map((map) => (
          <div key={(map.slug, map.label)} className="map_container">
            <button
              type="button"
              className="w-full h-14"
              onClick={() => handleMapClick(map.label)}
            >
              <Map mapObj={map} imgHeight="h-12" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapsFilters;
