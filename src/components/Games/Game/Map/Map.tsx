import type { GameData } from '../../../../types/store/gameTypes';
import { capitalizeFirstLetter } from '../../../../utils/utils';

function Map({ gameObj }: { gameObj: GameData }) {
  return (
    <>
      <img
        className="h-12 w-full object-cover rounded-sm rounded-r-none"
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
    </>
  );
}

export default Map;
