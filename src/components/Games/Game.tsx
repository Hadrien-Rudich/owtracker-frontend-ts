import { gameStore } from '../../store/gameStore';
import {
  filterGames,
  capitalizeFirstLetter,
  getResultClassNameFromGame,
} from '../../utils/utils';
import DeleteGame from './DeleteGame';
import EditGame from './EditGame';
import type { GameData } from '../../types/store/gameTypes';

function Game() {
  const {
    gamesData,
    selectGame,
    unselectGame,
    setIsUpdatingGame,
    isUpdatingGame,
    selectedGame,
    currentMonth,
  } = gameStore();

  const filteredGames = filterGames(currentMonth, gamesData);

  const handleGameSelection = (gameObj: GameData) => {
    if (selectedGame.id === gameObj.id) {
      console.log(selectedGame, gameObj);

      setIsUpdatingGame(false);
      unselectGame();
    } else {
      console.log(selectedGame, gameObj);

      setIsUpdatingGame(true);
      selectGame(gameObj);
    }
  };

  return (
    <div className="flexdiv col tracking-wider">
      {filteredGames.map((g) => (
        <button
          key={g.id}
          value={g.id}
          onClick={() => handleGameSelection(g)}
          type="button"
          className="w-full flexdiv"
        >
          <div
            key={g.id}
            className={`${
              isUpdatingGame && g.id === selectedGame.id
                ? ' selected z-10'
                : ' unselected'
            }  gameHistory_container game relative`}
          >
            <div className="lg:w-[47%] w-[30%] mapImage_container relative">
              <img
                className="h-12 w-full object-cover rounded-sm rounded-r-none"
                src={`images/maps/${g.mapImageUrl}`}
                alt=""
              />
              <div className="absolute inset-0">
                <div className="flexdiv gap-4 absolute top-1/2 left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
                  <p className="sm:h-12 sm:w-32 h-6 w-16 sm:text-lg sm:tracking-wider text-base truncate text-left">
                    {g.map}
                  </p>

                  <img
                    className="sm:h-12 sm:w-8 sm:block hidden"
                    src={`images/mapTypes/${capitalizeFirstLetter(
                      g.mapType
                    )}_icon.svg`}
                    alt="map type icon"
                  />
                </div>
              </div>
            </div>
            <div className="heroImage_container flex sm:justify-center justify-start pl-4  gap-0.5 lg:w-[47%] w-[50%]">
              {g.heroesImageUrl.map((heroImage) => (
                <img
                  key={heroImage}
                  src={`images/heroes/${heroImage}`}
                  className="sm:h-10 h-7"
                  alt=""
                />
              ))}
            </div>
            <div className="result_container flexdiv lg:w-[3%] w-[10%]">
              <p
                className={`${getResultClassNameFromGame(g)}     
               result_container w-1/2`}
              >
                {g.result.slice(0, 1)}
              </p>
            </div>
            <div className="date_container flexdiv lg:w-[3%] w-[10%]">
              <p>{g.date.slice(0, 5)}</p>
            </div>
            <div
              className={`${
                isUpdatingGame && g.id === selectedGame.id ? '' : 'hidden'
              } button_container flexdiv absolute xl:right-[6.5rem] lg:right-[4rem] sm:right-[9rem] xs:right-[7rem] right-[5rem]`}
            >
              {isUpdatingGame && g.id === selectedGame.id && (
                <div className=" flex justify-center sm:gap-2">
                  <EditGame gameObj={g} />
                  <DeleteGame gameObj={g} />
                </div>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default Game;
