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
    isUpdatingGame,
    selectedGame,
    currentMonth,
  } = gameStore();

  const filteredGames = filterGames(currentMonth, gamesData);

  const handleGameSelection = (gameObj: GameData) => {
    if (selectedGame.id === gameObj.id) {
      unselectGame();
    } else {
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
              g.id === selectedGame.id ? ' selected z-10' : ' unselected'
            }  gameHistory_container game relative`}
          >
            <div className="w-[45%] lg:w[40%] mapImage_container ">
              <img
                className="h-12 w-full object-cover rounded-sm rounded-r-none"
                src={`images/maps/${g.mapImageUrl}`}
                alt=""
              />
              <div className="absolute inset-0">
                <div className="flexdiv gap-4 absolute top-1/2 left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
                  <p className="flex items-center sm:h-12 sm:w-32 h-6 w-16 sm:text-lg sm:tracking-wider text-base truncate text-left">
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
            <div className="heroImage_container flex sm:justify-center justify-start pl-4  gap-0.5 w-[45%] lg:w[40%] relative">
              {g.heroesImageUrl.map((heroImage) => (
                <img
                  key={heroImage}
                  src={`images/heroes/${heroImage}`}
                  className="sm:h-10 h-7"
                  alt=""
                />
              ))}
            </div>

            <div className="flex lg:justify-center justify-end p-2 items-center xl:gap-2 gap-1 w-[20%] lg:w[10%] xs:text-base text-sm">
              <div
                className={`${
                  g.id === selectedGame.id
                    ? 'absolute 2xl:right-[1.25rem] xl:right-[0.85rem] lg:right-[0.5rem] md:right-[5.5rem] sm:right-[5.25rem] xs:right-[4.5rem] xxs:right-[4.2rem] right-[4rem]'
                    : 'hidden'
                } button_container ]`}
              >
                {g.id === selectedGame.id && (
                  <div className="2xl:gap-2 sm:gap-1 gap-0 flexdiv">
                    <EditGame gameObj={g} />
                    <DeleteGame gameObj={g} />
                  </div>
                )}
              </div>
              <div className="result_container md:w-[25%] w-[30%]">
                <p
                  className={`${getResultClassNameFromGame(g)}     
               result_container`}
                >
                  {g.result.slice(0, 1)}
                </p>
              </div>

              <div className="date_container  md:w-[25%] w-[30%]">
                {isUpdatingGame ? <p>ZOB</p> : <p>{g.date.slice(0, 5)}</p>}
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default Game;
