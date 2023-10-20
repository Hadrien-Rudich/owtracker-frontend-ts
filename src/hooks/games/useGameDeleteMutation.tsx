import { useMutation } from '@tanstack/react-query';
import { gameStore } from '../../store/gameStore';
import { deleteGameFromApi } from '../../services/API/games';
import type { GameData } from '../../types/store/gameTypes';

function useGameDeleteMutation({ gameObj }: { gameObj: GameData }) {
  const { deleteGame, unselectGame, setGameToast, setGameToastMessage } =
    gameStore();

  const { mutate } = useMutation({
    mutationFn: () =>
      deleteGameFromApi(gameObj.userId, gameObj.profileId, gameObj.id),
    onSuccess: () => {
      setGameToast(true);
      setGameToastMessage('Game Deleted!');
      deleteGame(gameObj.id);
      unselectGame();
    },
    retry: 1,
  });

  return mutate;
}

export default useGameDeleteMutation;
