import { MouseEvent } from 'react';
import { gameReportStore } from '../../../store/gameReportStore';

function MapTypes() {
  const { mapType, addMapType, clearMapType, toggleMapModal, mapTypesData } =
    gameReportStore();

  const handleMapTypeClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (mapType === event.currentTarget.value) {
      clearMapType();
    } else {
      const mapTypeValue = event.currentTarget.value;
      addMapType(mapTypeValue);
    }
    toggleMapModal();
  };

  return (
    <div className="flexdiv">
      <div className="mapTypes_container sm:w-1/3 w-5/6 justify-around flex items-center content-center rounded-sm">
        {mapTypesData.map((mtype) => (
          <div className="mapType_container" key={mtype.id}>
            <button
              type="button"
              onClick={handleMapTypeClick}
              value={mtype.label.toLowerCase()}
              className={`${
                mapType === mtype.label.toLowerCase()
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
