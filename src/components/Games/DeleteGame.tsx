import { FaTrashAlt } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import { gameStore } from '../../store/gameStore';
import type { GameData } from '../../types/store/gameTypes';
import { deleteGameFromApi } from '../../services/API/games';

function DeleteGame({ gameObj }: { gameObj: GameData }) {
  const { deleteGame: deleteGameData, unselectGame } = gameStore();

  const mutation = useMutation({
    mutationFn: () =>
      deleteGameFromApi(gameObj.userId, gameObj.profileId, gameObj.id),
    onSuccess: () => {
      deleteGameData(gameObj.id);
      unselectGame();
    },
    retry: 1,
  });

  const handleDeleteClick = () => {
    mutation.mutate();
  };
  return (
    <button
      type="button"
      onClick={handleDeleteClick}
      className=" text-warning hover:scale-125"
    >
      <FaTrashAlt className="sign h-[1.1rem] w-[1.1rem]" />
    </button>
  );
}

export default DeleteGame;
