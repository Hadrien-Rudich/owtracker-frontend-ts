import { MouseEvent } from 'react';
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

  const handleGameClick = (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLInputElement>,
    gameObj: GameData
  ) => {
    const targetGame = event.currentTarget.value;
    if (!isUpdatingGame) {
      return;
    }

    if (selectedGame.id === Number(targetGame)) {
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
          onClick={(event) =>
            handleGameClick(event, {
              ...g,
            })
          }
          type="button"
          className="w-10/12"
        >
          <div
            key={g.id}
            className={`${
              isUpdatingGame && g.id === selectedGame.id
                ? ' selected'
                : ' unselected'
            }  gameHistory_container game`}
          >
            <div className="relative mapImage_container w-5/12">
              <img
                className="h-12 w-full object-cover rounded-sm rounded-r-none"
                src={`images/maps/${g.mapImageUrl}`}
                alt=""
              />
              <div className="absolute inset-0">
                <div className="flexdiv gap-4 absolute top-1/2 left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
                  <p className="">{g.map}</p>

                  <img
                    className="h-6 w-6"
                    src={`images/mapTypes/${capitalizeFirstLetter(
                      g.mapType
                    )}_icon.svg`}
                    alt="map type icon"
                  />
                </div>
              </div>
            </div>
            <div className="heroImage_container w-4/12 flexdiv gap-0.5">
              {g.heroesImageUrl.map((heroImage) => (
                <img
                  key={heroImage}
                  src={`images/heroes/${heroImage}`}
                  className="h-10"
                  alt=""
                />
              ))}
            </div>
            <div
              className={`${getResultClassNameFromGame(g)}     
            result_container flexdiv w-1/12 `}
            >
              <p>{g.result}</p>
            </div>
            <div className="date_container w-1/12">
              <p>{g.date.slice(0, 5)}</p>
            </div>
            <div className="button_container flex content-center justify-around w-1/12 gap-2">
              {isUpdatingGame && g.id === selectedGame.id && (
                <div>
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
