import { useEffect } from 'react';
import { gameStore } from '../../store/gameStore';
import { useHeroesQueries } from '../../hooks/queries/useHeroesQueries';
import { useMapsQueries } from '../../hooks/queries/useMapsQueries';
import { filterGamesByMonth } from '../../utils/utils';
import ExistingGame from './ExistingGame';
import CreateGameMode from './GameCreation/CreateGameMode';
import NewGame from './NewGame';

function Game() {
  useHeroesQueries();
  useMapsQueries();

  const {
    gamesData,
    currentMonth,
    isCreatingGame,
    setIsUpdatingGame,
    setIsCreatingGame,
    clearNewGame,
  } = gameStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsUpdatingGame(false);
        setIsCreatingGame(false);
        clearNewGame();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsUpdatingGame, setIsCreatingGame, clearNewGame]);

  const filteredGames = filterGamesByMonth(currentMonth, gamesData);

  return (
    <div className="games_container flexdiv col tracking-wider z-30 w-full">
      <div className="CreateGame_container w-full flexdiv h-12">
        {!isCreatingGame ? <CreateGameMode /> : <NewGame />}
      </div>
      <div className="existingGames_container flexdiv col w-full">
        {filteredGames.map((game) => (
          <ExistingGame gameObj={game} key={game.id} />
        ))}
      </div>
    </div>
  );
}

export default Game;
