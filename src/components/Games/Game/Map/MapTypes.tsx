import { MouseEvent } from 'react';
import { gameStore } from '../../../../store/gameStore';
import { gameReportStore } from '../../../../store/gameReportStore';

function MapTypes() {
  const { selectGameMapType, selectedGameMapType, clearSelectedGameMapType } =
    gameStore();

  const { mapTypesData } = gameReportStore();

  const handleMapTypeClick = (event: MouseEvent<HTMLButtonElement>) => {
    const mapTypeValue = event.currentTarget.value;

    if (selectedGameMapType === mapTypeValue) {
      clearSelectedGameMapType();
    } else {
      selectGameMapType(mapTypeValue);
    }
  };

  return (
    <div className="MapTypes_container flexdiv">
      <div className="flex justify-evenly rounded-sm">
        {mapTypesData.map((mtype) => (
          <div className="mapType_container" key={mtype.id}>
            <button
              type="button"
              onClick={handleMapTypeClick}
              value={mtype.label.toLowerCase()}
              className={`${
                selectedGameMapType === mtype.label.toLowerCase()
                  ? 'scale-105'
                  : 'opacity-30 hover:opacity-100 hover:scale-105'
              } flexdiv rounded-sm `}
            >
              <img
                className="h-9 w-20 drop-shadow-lg"
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
