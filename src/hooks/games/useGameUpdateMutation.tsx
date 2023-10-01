import { useMutation } from '@tanstack/react-query';
import { gameStore } from '../../store/gameStore';
import type { GameData } from '../../types/store/gameTypes';
import { updateGameOnApi, GameAddedToApi } from '../../services/API/games';

function useGameUpdateMutation({ gameObj }: { gameObj: GameData }) {
  const {
    selectedGameResult,
    selectedGameDateInFormat,
    setIsUpdatingGame,
    setGameSavedToast,
    updateGame,
  } = gameStore();

  const { mutate } = useMutation({
    mutationFn: () =>
      updateGameOnApi(gameObj.userId, gameObj.profileId, gameObj.id, {
        ...gameObj,
        result: selectedGameResult,
        date: selectedGameDateInFormat,
      }),
    onSuccess: (UpdatedGameOnApi: GameAddedToApi) => {
      setIsUpdatingGame(false);
      setGameSavedToast(true);
      updateGame(UpdatedGameOnApi.game.id, UpdatedGameOnApi.game);
    },
    retry: 1,
  });

  return mutate;
}

export default useGameUpdateMutation;
