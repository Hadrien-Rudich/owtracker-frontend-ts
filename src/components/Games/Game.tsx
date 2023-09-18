import { gameStore } from '../../store/gameStore';
import {
  filterGames,
  capitalizeFirstLetter,
  getResultClassNameFromGame,
} from '../../utils/utils';
import DeleteGame from './DeleteGame';

function Game() {
  const { gamesData, currentMonth } = gameStore();

  const filteredGames = filterGames(currentMonth, gamesData);

  return (
    <div className="flexdiv col gap-[0.05rem] tracking-wider">
      {filteredGames.map((g) => (
        <div
          key={g.id}
          className="gameHistory_container w-full flexdiv h-12 bg-mainColor hover:bg-activeColor hover:shadow-lg rounded-sm"
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
          <div className="heroImage_container w-5/12 flexdiv gap-0.5">
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
            <DeleteGame gameObj={g} />
          </div>
          <div className="w-1/12">
            <p>{g.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Game;
