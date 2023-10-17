/* eslint-disable react/require-default-props */
import type { GameData } from '../../../../types/store/gameTypes';
import type { MapData } from '../../../../types/store/gameReportTypes';
import { capitalizeFirstLetter } from '../../../../utils/utils';
import { gameStore } from '../../../../store/gameStore';

interface MapProps {
  gameObj?: GameData;
  mapObj?: MapData;
  imgHeight: string;
}

function Map({ gameObj, mapObj, imgHeight }: MapProps) {
  const { isUpdatingGame, isCreatingGame } = gameStore();
  return (
    <>
      {gameObj && !isUpdatingGame && !isCreatingGame ? (
        <div className="">
          <img
            className={`${imgHeight} w-full object-cover rounded-sm rounded-r-none`}
            src={`images/maps/${gameObj.mapImageUrl}`}
            alt=""
          />

          <div className="absolute inset-0">
            <div className="flexdiv gap-4 absolute top-1/2 left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
              <p className="flex items-center sm:h-12 sm:w-40 h-6 w-16 sm:text-lg sm:tracking-wider text-base truncate text-left">
                {gameObj.map}
              </p>

              <img
                className="sm:h-12 sm:w-8 sm:block hidden"
                src={`images/mapTypes/${capitalizeFirstLetter(
                  gameObj.mapType
                )}_icon.svg`}
                alt="map type icon"
              />
            </div>
          </div>
        </div>
      ) : (
        gameObj &&
        (isUpdatingGame || isCreatingGame) && (
          <div className="">
            <img
              className={`${imgHeight} w-full object-cover rounded-sm rounded-r-none`}
              src={`images/maps/${gameObj.mapImageUrl}`}
              alt=""
            />
          </div>
        )
      )}

      {mapObj && (
        <div className="map_container flexdiv group">
          <img
            className={`${imgHeight} w-full object-cover rounded-sm rounded-r-none h-14`}
            src={`images/maps/${mapObj.imageUrl}`}
            alt=""
          />
          <div className="absolute flexdiv px-1 bg-mainText bg-opacity-40 w-1/4 h-6  invisible group-hover:visible ">
            <p className="text-xl absolute truncate tracking-wider text-secondaryText invisible group-hover:visible ">
              {mapObj.label}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Map;
