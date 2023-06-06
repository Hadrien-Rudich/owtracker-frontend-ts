import React from 'react';
import gameReportStore from '../../../store/gameReportStore';

function MapTypes() {
  const { mapType, addMapType, clearMapType, toggleMapModal, typesData } =
    gameReportStore();

  const handleMapTypeClick = async (e) => {
    if (mapType === e.currentTarget.value) {
      clearMapType();
    } else {
      const mapTypeValue = e.currentTarget.value;
      addMapType(mapTypeValue);
    }
    toggleMapModal();
  };

  return (
    <div className="flexdiv">
      <div className="mapTypes_container sm:w-1/3 w-5/6 justify-around flex items-center content-center rounded-sm">
        {typesData.map((type) => (
          <div className="mapType_container" key={type}>
            <button
              type="button"
              onClick={handleMapTypeClick}
              value={type.label.toLowerCase()}
              className={`${
                mapType === type.label.toLowerCase()
                  ? 'scale-105'
                  : 'opacity-30 hover:opacity-100 hover:scale-105'
              } flexdiv rounded-sm`}
            >
              <img
                className="md:h-10 lg:h-11 h-9 w-20 drop-shadow-lg"
                src={`images/mapTypes/${type.imageUrl}`}
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
