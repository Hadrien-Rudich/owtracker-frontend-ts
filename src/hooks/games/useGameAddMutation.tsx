import { useMutation } from '@tanstack/react-query';
import { gameStore } from '../../store/gameStore';
import { profileStore } from '../../store/profileStore';
import { authStore } from '../../store/authStore';

import { addGameToApi, GameAddedToApi } from '../../services/API/games';

function useGameAddMutation() {
  const {
    selectedGameHeroes,
    selectedGameMap,
    selectedGameMapImage,
    selectedGameResult,
    selectedGameMapType,
    selectedGameHeroesImages,
    selectedGameDateInFormat,
    setSavingGameInProgress,
    setGameToastMessage,
    addGame,
    setGameToast,
  } = gameStore();

  const { userData } = authStore();
  const { selectedProfile } = profileStore();

  const { mutate } = useMutation({
    mutationFn: () =>
      addGameToApi(userData.id, selectedProfile.id, {
        result: selectedGameResult,
        map: selectedGameMap,
        mapType: selectedGameMapType,
        mapImageUrl: selectedGameMapImage,
        heroes: selectedGameHeroes,
        heroesImageUrl: selectedGameHeroesImages,
        date: selectedGameDateInFormat,
      }),
    onSuccess: (newGameAddedToApi: GameAddedToApi) => {
      addGame(newGameAddedToApi.game);
      setTimeout(() => {
        setSavingGameInProgress(false);
        setGameToast(true);
        setGameToastMessage('Game Created!');
      }, 1000);
    },
    retry: 1,
  });

  return mutate;
}

export default useGameAddMutation;
