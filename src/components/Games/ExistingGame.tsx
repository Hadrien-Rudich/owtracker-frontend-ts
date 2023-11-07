import { gameStore } from '../../store/gameStore';
import { getGameContainerClassName } from '../../utils/classNameUtils';
import Result from './Game/Result/Result';
import EditResult from './Game/Result/Edit/EditResult';
import Date from './Game/Date/Date';
import EditGameButtons from './EditGame/EditGameButtons';
import type { GameData } from '../../types/store/gameTypes';
import EditDate from './Game/Date/Edit/EditDate';
import Heroes from './Game/Heroes/Heroes';
import Map from './Game/Map/Map';
import EditMap from './Game/Map/Edit/EditMap';
import EditHeroes from './Game/Heroes/Edit/EditHeroes';
import New from './Game/NewLabel/New';

function ExistingGame({ gameObj }: { gameObj: GameData }) {
  const {
    selectGame,
    unselectGame,
    selectedGame,
    isUpdatingGame,
    isCreatingGame,
    setIsUpdatingGame,
  } = gameStore();

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
            isUpdatingGame,
            isCreatingGame
          )} gameHistory_container game relative flexdiv gap-2`}
        >
          <div className="Map_container md:w-[40%] w-[30%] mapImage_container">
            <MapComponent gameObj={gameObj} imgHeight="h-12" />
          </div>
          <div className="Heroes_container flex md:justify-center justify-start gap-0.5 md:w-[40%] w-[37%]">
            <HeroesComponent
              gameObj={gameObj}
              imgHeight="sm:h-[2.25rem] h-[2rem]"
            />
          </div>
          <div className="details_container flex md:justify-center justify-start items-center md:w-[20%] w-[33%]">
            <div className="Result_container md:w-[37.5%] w-[17.5%]">
              <ResultComponent gameObj={gameObj} />
            </div>
            <div className="Date_container w-[40%]">
              <DateComponent gameObj={gameObj} />
            </div>
            <div className="gamebuttons_container flex  justify-around md:w-[22.5%] w-[40%]">
              <EditGameButtons gameObj={gameObj} />
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
