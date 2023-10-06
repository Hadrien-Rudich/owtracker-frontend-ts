import { FaCheck } from 'react-icons/fa';
import { gameStore } from '../../../store/gameStore';
import type { GameData } from '../../../types/store/gameTypes';
import useGameUpdateMutation from '../../../hooks/games/useGameUpdateMutation';

function UpdateGame({ gameObj }: { gameObj: GameData }) {
  const {
    selectedGameResult,
    selectedGameDateInFormat,
    selectedGameMap,
    selectedGame,
  } = gameStore();

  const mutateGame = useGameUpdateMutation({ gameObj });

  const handleSubmit = () => {
    if (
      gameObj.result === selectedGameResult &&
      gameObj.date === selectedGameDateInFormat &&
      gameObj.map === selectedGameMap
    ) {
      console.log('Submitted Game was identical to the original Game');
    } else {
      console.log(selectedGame);
      console.log(gameObj);
      mutateGame();
    }
  };

  return (
    <button
      onClick={handleSubmit}
      type="submit"
      className="text-validate hover:scale-125"
    >
      <FaCheck className="sign lg:h-[1.2rem] lg:w-[1.2rem] h-[1.4rem] w-[1.4rem]" />
    </button>
  );
}

export default UpdateGame;
