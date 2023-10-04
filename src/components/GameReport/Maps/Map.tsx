import { MouseEvent, useEffect, useState } from 'react';
import { gameReportStore } from '../../../store/gameReportStore';
import { filterMapTypes } from '../../../utils/utils';
import ScrollIntoView from '../../ScrollIntoView';

function Map() {
  const { selectedMap, selectMap, unselectMap, selectedMapType, mapsData } =
    gameReportStore();

  const handleMapClick = (
    event: MouseEvent<HTMLButtonElement>,
    imageUrl: string
  ) => {
    const targetMap = event.currentTarget.value;
    if (selectedMap !== targetMap) {
      selectMap(targetMap, imageUrl);
    } else {
      unselectMap();
    }
  };
  const [shouldScrollIntoMaps, setShouldScrollIntoMaps] = useState(false);

  const filteredMaps = filterMapTypes(mapsData, selectedMapType);

  useEffect(() => {
    const verifyMapTypeIsSelected = () => selectedMapType !== '';

    if (verifyMapTypeIsSelected()) {
      setShouldScrollIntoMaps(true);
    }
  }, [selectedMapType]);
  return (
    <div className="map_container pb-6 flexdiv flex-wrap w-full sm:gap-1 gap-0">
      {selectedMapType !== '' && (
        <ScrollIntoView shouldScroll={shouldScrollIntoMaps}>
          {filteredMaps.map((m) => (
            <button
              className={`${
                selectedMap?.includes(m.slug.toLowerCase())
                  ? 'selected'
                  : 'unselected'
              }   list sm:w-1/6 w-2/4 `}
              key={m.id}
              value={m.slug}
              onClick={(event) => handleMapClick(event, m.imageUrl)}
              type="button"
            >
              <div className="map_container flexdiv group">
                <img src={`images/maps/${m.imageUrl}`} alt="map" />

                <div className="absolute bottom-0 right-[0.09rem]  flexdiv bg-mainText bg-opacity-40 w-1/2 h-6 invisible group-hover:visible ">
                  <p className="text-lg absolute truncate tracking-wider text-secondaryText invisible group-hover:visible ">
                    {m.label}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </ScrollIntoView>
      )}
    </div>
  );
}
export default Map;
