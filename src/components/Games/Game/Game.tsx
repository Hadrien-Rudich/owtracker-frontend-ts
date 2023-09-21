import { gameStore } from '../../../store/gameStore';
import { filterGames, capitalizeFirstLetter } from '../../../utils/utils';
import Result from './Result/Result';
import EditResult from './Result/EditResult';
import Date from './Date/Date';
import GameButtons from './GameButtons';
import type { GameData } from '../../../types/store/gameTypes';
import EditDate from './Date/EditDate';

function Game() {
  const {
    gamesData,
    selectGame,
    unselectGame,
    selectedGame,
    currentMonth,
    isUpdatingGame,
    setIsUpdatingGame,
  } = gameStore();

  const filteredGames = filterGames(currentMonth, gamesData);

  const handleGameSelection = (gameObj: GameData) => {
    if (selectedGame.id === gameObj.id) {
      unselectGame();
    } else {
      setIsUpdatingGame(false);
      selectGame(gameObj);
    }
  };

  const ResultComponent = isUpdatingGame ? EditResult : Result;
  const DateComponent = isUpdatingGame ? EditDate : Date;

  return (
    <div className="flexdiv col tracking-wider z-30">
      {filteredGames.map((g) => (
        <div
          key={g.id}
          onClick={() => handleGameSelection(g)}
          role="button"
          tabIndex={0}
          className="w-full flexdiv"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleGameSelection(g);
            }
          }}
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
                  <p className="flex items-center sm:h-12 sm:w-40 h-6 w-16 sm:text-lg sm:tracking-wider text-base truncate text-left">
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
            <div className="details_container flex lg:justify-center justify-end p-2 items-center xl:gap-2 gap-1 w-[20%] lg:w[10%] xs:text-base text-sm">
              <div className="gamebuttons_container flexdiv">
                <GameButtons gameObj={g} />
              </div>
              <div className="result_container md:w-[25%] w-[30%]">
                <ResultComponent gameObj={g} />
              </div>
              <div className="date_container md:w-[25%] w-[30%]">
                <DateComponent gameObj={g} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Game;
