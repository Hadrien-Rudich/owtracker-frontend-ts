import { MouseEvent } from 'react';
import { gameReportStore } from '../../../store/gameReportStore';
import { filterMapTypes } from '../../../utils/utils';

function Map() {
  const {
    selectedMap: map,
    selectMap,
    unselectMap,

    selectedMapType,
    mapsData,
  } = gameReportStore();

  const handleMapClick = (
    event: MouseEvent<HTMLButtonElement>,
    imageUrl: string
  ) => {
    const targetMap = event.currentTarget.value;
    if (map !== targetMap) {
      selectMap(targetMap, imageUrl);
    } else {
      unselectMap();
    }
  };

  const filteredMaps = filterMapTypes(mapsData, selectedMapType);

  return (
    <div className="map_container pb-6 flexdiv flex-wrap w-5/6 sm:gap-1 gap-0">
      {selectedMapType !== null &&
        filteredMaps.map((m) => (
          <button
            className={`${
              map?.includes(m.slug.toLowerCase()) ? 'selected' : 'unselected'
            }   list sm:w-1/4 w-2/4 `}
            key={m.id}
            value={m.slug}
            onClick={(event) => handleMapClick(event, m.imageUrl)}
            type="button"
          >
            <img src={`images/maps/${m.imageUrl}`} alt="map" />
          </button>
        ))}
    </div>
  );
}
export default Map;
