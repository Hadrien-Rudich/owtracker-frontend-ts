import { useEffect } from 'react';
import { gameStore } from '../../../store/gameStore';
import { getGameContainerClassName } from '../../../utils/utils';
import Result from './Result/Result';
import EditResult from './Result/Edit/EditResult';
import Date from './Date/Date';
import GameButtons from './GameButtons';
import type { GameData } from '../../../types/store/gameTypes';
import EditDate from './Date/Edit/EditDate';
import Heroes from './Heroes/Heroes';
import Map from './Map/Map';
import EditMap from './Map/Edit/EditMap';
import EditHeroes from './Heroes/Edit/EditHeroes';
import New from './New';

function ExistingGame({ gameObj }: { gameObj: GameData }) {
  const {
    selectGame,
    unselectGame,
    selectedGame,
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

  const handleGameSelection = (game: GameData) => {
    if (isUpdatingGame) {
      return;
    }
    if (selectedGame.id === game.id) {
      unselectGame();
    } else {
      setIsUpdatingGame(false);
      selectGame(game);
    }
  };

  const ResultComponent = isUpdatingGame ? EditResult : Result;
  const DateComponent = isUpdatingGame ? EditDate : Date;
  const MapComponent = isUpdatingGame ? EditMap : Map;
  const HeroesComponent = isUpdatingGame ? EditHeroes : Heroes;

  return (
    <div className="ExistingGame_container flexdiv col tracking-wider w-full">
      <div
        key={gameObj.id}
        onClick={() => handleGameSelection(gameObj)}
        role="button"
        tabIndex={0}
        className="w-full flexdiv border-[0.01rem] border-activeColor"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleGameSelection(gameObj);
          }
        }}
      >
        <div
          key={gameObj.id}
          className={`${getGameContainerClassName(
            gameObj,
            selectedGame,
            isUpdatingGame
          )} gameHistory_container game relative`}
        >
          <div className="Map_container w-[45%] lg:w[40%] mapImage_container ">
            <MapComponent gameObj={gameObj} imgHeight="h-12" />
          </div>
          <div className="Heroes_container flex sm:justify-center justify-start pl-4  gap-0.5 w-[45%] lg:w[40%] relative">
            <HeroesComponent gameObj={gameObj} imgHeight="h-10" />
          </div>
          <div className="details_container flex lg:justify-center justify-end p-2 items-center xl:gap-2 gap-1 w-[20%] lg:w[10%] xs:text-base text-sm">
            <div className="gamebuttons_container flexdiv relative">
              <GameButtons gameObj={gameObj} />
            </div>
            <div className="Result_container md:w-[25%] w-[30%]">
              <ResultComponent gameObj={gameObj} />
            </div>
            <div className="Date_container md:w-[25%] w-[30%]">
              <DateComponent gameObj={gameObj} />
            </div>
          </div>
          {!isUpdatingGame && (
            <div className="New_container">
              <New gameObj={gameObj} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExistingGame;
