import { useEffect } from 'react';
import { gameStore } from '../../../store/gameStore';
import { useHeroesQueries } from '../../../hooks/queries/useHeroesQueries';
import { useMapsQueries } from '../../../hooks/queries/useMapsQueries';
import { filterGamesByMonth } from '../../../utils/utils';
import ExistingGame from './ExistingGame';
import NewGame from './NewGame';

function Game() {
  useHeroesQueries();
  useMapsQueries();

  const {
    gamesData,

    currentMonth,
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

  return (
    <div className="flexdiv col tracking-wider z-30 ">
      <NewGame />
      {filteredGames.map((game) => (
        <ExistingGame gameObj={game} key={game.id} />
      ))}
    </div>
  );
}

export default Game;
