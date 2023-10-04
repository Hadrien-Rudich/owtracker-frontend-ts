import { useEffect, useRef, useState, MouseEvent } from 'react';
import { gameReportStore } from '../../../store/gameReportStore';

function MapTypes() {
  const {
    selectedMapType,
    selectMapType,
    unselectMapType,
    toggleMapModal,
    mapTypesData,
    selectedResult,
    selectedHeroes,
  } = gameReportStore();

  const mapTypesComponentIsDisplayed = useRef<HTMLDivElement | null>(null);
  const [shouldScrollIntoMapTypes, setShouldScrollIntoMapTypes] =
    useState(false);
  useEffect(() => {
    const verifyResultAndHeroesSelection = () =>
      selectedResult !== '' && selectedHeroes.length > 0;

    if (verifyResultAndHeroesSelection()) {
      setShouldScrollIntoMapTypes(true);
    }
  }, [selectedResult, selectedHeroes]);

  const scrollIntoView = (
    element: HTMLDivElement | null,
    shouldScroll: boolean
  ) => {
    if (shouldScroll && element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    scrollIntoView(
      mapTypesComponentIsDisplayed.current,
      shouldScrollIntoMapTypes
    );
    setShouldScrollIntoMapTypes(false);
  }, [shouldScrollIntoMapTypes]);
  const handleMapTypeClick = (event: MouseEvent<HTMLButtonElement>) => {
    const mapTypeValue = event.currentTarget.value;

    if (selectedMapType === mapTypeValue) {
      unselectMapType();
    } else {
      selectMapType(mapTypeValue);
    }
    toggleMapModal();
  };

  return (
    <div className="flexdiv">
      <div
        ref={mapTypesComponentIsDisplayed}
        className="mapTypes_container sm:w-1/3 w-5/6 justify-around flex items-center content-center rounded-sm"
      >
        {mapTypesData.map((mtype) => (
          <div className="mapType_container" key={mtype.id}>
            <button
              type="button"
              onClick={handleMapTypeClick}
              value={mtype.label.toLowerCase()}
              className={`${
                selectedMapType === mtype.label.toLowerCase()
                  ? 'scale-105'
                  : 'opacity-30 hover:opacity-100 hover:scale-105'
              } flexdiv rounded-sm`}
            >
              <img
                className="md:h-10 lg:h-11 h-9 w-20 drop-shadow-lg"
                src={`images/mapTypes/${mtype.imageUrl}`}
                alt="map type icon"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapTypes;
