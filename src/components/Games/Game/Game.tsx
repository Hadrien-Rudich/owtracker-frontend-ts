import { useEffect } from 'react';
import { gameStore } from '../../../store/gameStore';
import {
  filterGamesByMonth,
  getGameContainerClassName,
} from '../../../utils/utils';
import Result from './Result/Result';
import EditResult from './Result/EditResult';
import Date from './Date/Date';
import GameButtons from './GameButtons';
import type { GameData } from '../../../types/store/gameTypes';
import EditDate from './Date/EditDate';
import Heroes from './Heroes/Heroes';
import Map from './Map/Map';
import EditMap from './Map/EditMap';
import EditHeroes from './Heroes/EditHeroes';
import New from './Date/New';

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

  const filteredGames = filterGamesByMonth(currentMonth, gamesData);

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
  const MapComponent = isUpdatingGame ? EditMap : Map;
  const HeroesComponent = isUpdatingGame ? EditHeroes : Heroes;

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
            <div className="Map_container w-[45%] lg:w[40%] mapImage_container ">
              <MapComponent gameObj={game} imgHeight="h-12" />
            </div>
            <div className="Heroes_container flex sm:justify-center justify-start pl-4  gap-0.5 w-[45%] lg:w[40%] relative">
              <HeroesComponent gameObj={game} imgHeight="h-10" />
            </div>
            <div className="details_container flex lg:justify-center justify-end p-2 items-center xl:gap-2 gap-1 w-[20%] lg:w[10%] xs:text-base text-sm">
              <div className="gamebuttons_container flexdiv relative">
                <GameButtons gameObj={game} />
              </div>
              <div className="Result_container md:w-[25%] w-[30%]">
                <ResultComponent gameObj={game} />
              </div>
              <div className="Date_container md:w-[25%] w-[30%]">
                <DateComponent gameObj={game} />
              </div>
            </div>
            {!isUpdatingGame && (
              <div className="New_container">
                <New gameObj={game} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Game;
