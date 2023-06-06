import React from 'react';
import gameReportStore from '../../../store/gameReportStore';
import { filterMapTypes } from '../../../utils/filters';

function Map() {
  const { map, addMap, clearMap, mapType, mapsData } = gameReportStore();

  const toggleMap = (m) => {
    if (map !== m) {
      addMap(m);
    } else {
      clearMap();
    }
  };

  const handleMapClick = (e) => {
    toggleMap(e.currentTarget.value);
  };

  const filteredMaps = filterMapTypes(mapsData, mapType);

  return (
    <div className="map_container pb-6 flexdiv flex-wrap w-5/6 sm:gap-1 gap-0">
      {mapType !== null &&
        filteredMaps.map((m) => (
          <button
            className={`${
              map?.includes(m.slug.toLowerCase()) ? 'selected' : 'unselected'
            }   list sm:w-1/4 w-2/4 `}
            key={m.id}
            value={m.slug}
            onClick={handleMapClick}
            type="button"
          >
            <img src={`images/maps/${m.imageUrl}`} alt="map" />
          </button>
        ))}
    </div>
  );
}
export default Map;
