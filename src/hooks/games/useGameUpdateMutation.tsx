import { useMutation } from '@tanstack/react-query';
import { gameStore } from '../../store/gameStore';
import type { GameData } from '../../types/store/gameTypes';
import { updateGameOnApi, GameAddedToApi } from '../../services/API/games';

function useGameUpdateMutation({ gameObj }: { gameObj: GameData }) {
  const {
    selectedGameResult,
    selectedGameMap,
    selectedGameMapImage,
    selectedGameDateInFormat,
    selectedGameHeroes,
    selectedGameHeroesImages,
    setIsUpdatingGame,
    setGameToast: setGameSavedToast,
    setGameToastMessage: setGameSavedToastMessage,
    updateGame,
  } = gameStore();

  const { mutate } = useMutation({
    mutationFn: () =>
      updateGameOnApi(gameObj.userId, gameObj.profileId, gameObj.id, {
        ...gameObj,
        result: selectedGameResult,
        date: selectedGameDateInFormat,
        map: selectedGameMap,
        mapImageUrl: selectedGameMapImage,
        heroes: selectedGameHeroes,
        heroesImageUrl: selectedGameHeroesImages,
      }),
    onSuccess: (UpdatedGameOnApi: GameAddedToApi) => {
      setIsUpdatingGame(false);
      setGameSavedToast(true);
      setGameSavedToastMessage('Game Updated!');

      updateGame(UpdatedGameOnApi.game.id, UpdatedGameOnApi.game);
    },
    retry: 1,
  });

  return mutate;
}

export default useGameUpdateMutation;
