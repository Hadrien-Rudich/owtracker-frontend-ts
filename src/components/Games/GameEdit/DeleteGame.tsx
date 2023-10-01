import { FaTrashAlt } from 'react-icons/fa';
import type { GameData } from '../../../types/store/gameTypes';
import useGameDeleteMutation from '../../../hooks/games/useGameDeleteMutation';

function DeleteGame({ gameObj }: { gameObj: GameData }) {
  const mutateGame = useGameDeleteMutation({ gameObj });

  const handleDeleteClick = () => {
    mutateGame();
  };
  return (
    <button
      type="button"
      onClick={handleDeleteClick}
      className=" text-warning hover:scale-125"
    >
      <FaTrashAlt className="sign lg:h-[1.2rem] lg:w-[1.2rem] h-[1.4rem] w-[1.4rem]" />
    </button>
  );
}

export default DeleteGame;
