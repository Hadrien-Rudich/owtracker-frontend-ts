import { useEffect } from 'react';
import { gameStore } from '../../../store/gameStore';
import {
  filterGames,
  capitalizeFirstLetter,
  getGameContainerClassName,
} from '../../../utils/utils';
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsUpdatingGame(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsUpdatingGame]);

  const filteredGames = filterGames(currentMonth, gamesData);

  const handleGameSelection = (gameObj: GameData) => {
    if (isUpdatingGame) {
      return;
    }
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
    <div className="flexdiv col tracking-wider z-30 ">
      {filteredGames.map((game) => (
        <div
          key={game.id}
          onClick={() => handleGameSelection(game)}
          role="button"
          tabIndex={0}
          className="w-full flexdiv border-[0.01rem] border-activeColor"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleGameSelection(game);
            }
          }}
        >
          <div
            key={game.id}
            className={`${getGameContainerClassName(
              game,
              selectedGame,
              isUpdatingGame
            )} gameHistory_container game relative`}
          >
            <div className="w-[45%] lg:w[40%] mapImage_container ">
              <img
                className="h-12 w-full object-cover rounded-sm rounded-r-none"
                src={`images/maps/${game.mapImageUrl}`}
                alt=""
              />
              <div className="absolute inset-0">
                <div className="flexdiv gap-4 absolute top-1/2 left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
                  <p className="flex items-center sm:h-12 sm:w-40 h-6 w-16 sm:text-lg sm:tracking-wider text-base truncate text-left">
                    {game.map}
                  </p>

                  <img
                    className="sm:h-12 sm:w-8 sm:block hidden"
                    src={`images/mapTypes/${capitalizeFirstLetter(
                      game.mapType
                    )}_icon.svg`}
                    alt="map type icon"
                  />
                </div>
              </div>
            </div>
            <div className="heroImage_container flex sm:justify-center justify-start pl-4  gap-0.5 w-[45%] lg:w[40%] relative">
              {game.heroesImageUrl.map((heroImage) => (
                <img
                  key={heroImage}
                  src={`images/heroes/${heroImage}`}
                  className="sm:h-10 h-7"
                  alt=""
                />
              ))}
            </div>
            <div className="details_container flex lg:justify-center justify-end p-2 items-center xl:gap-2 gap-1 w-[20%] lg:w[10%] xs:text-base text-sm">
              <div className="gamebuttons_container flexdiv relative">
                <GameButtons gameObj={game} />
              </div>
              <div className="result_container md:w-[25%] w-[30%]">
                <ResultComponent gameObj={game} />
              </div>
              <div className="date_container md:w-[25%] w-[30%]">
                <DateComponent gameObj={game} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Game;
