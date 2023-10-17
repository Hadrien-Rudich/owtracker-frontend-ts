import { useMutation } from '@tanstack/react-query';
import { gameReportStore } from '../../store/gameReportStore';
import { gameStore } from '../../store/gameStore';
import { profileStore } from '../../store/profileStore';
import { authStore } from '../../store/authStore';

import { addGameToApi, GameAddedToApi } from '../../services/API/games';

function useGameAddMutation() {
  const {
    selectedHeroes,
    selectedMap,
    selectedMapImageUrl,
    selectedResult,
    selectedMapType,
    selectedHeroesImageUrl,
    setSavingGameInProgress,
    reset,
  } = gameReportStore();

  const {
    selectedGameHeroes,
    selectedGameMap,
    selectedGameMapImage,
    selectedGameResult,
    selectedGameMapType,
    selectedGameHeroesImages,
    setIsCreatingGame,
    addGame,
    setGameSavedToast,
  } = gameStore();

  const { userData } = authStore();
  const { selectedProfile } = profileStore();

  const { mutate } = useMutation({
    mutationFn: () =>
      addGameToApi(userData.id, selectedProfile.id, {
        // result: selectedResult,
        // map: selectedMap,
        // mapType: selectedMapType,
        // mapImageUrl: selectedMapImageUrl,
        // heroes: selectedHeroes,
        // heroesImageUrl: selectedHeroesImageUrl,
        result: selectedGameResult === '' ? selectedResult : selectedGameResult,
        map: selectedGameMap === '' ? selectedMap : selectedGameMap,
        mapType:
          selectedGameMapType === '' ? selectedMapType : selectedGameMapType,
        mapImageUrl:
          selectedGameMapImage === ''
            ? selectedMapImageUrl
            : selectedGameMapImage,
        heroes:
          selectedGameHeroes.length === 0 ? selectedHeroes : selectedGameHeroes,
        heroesImageUrl:
          selectedGameHeroesImages.length === 0
            ? selectedHeroesImageUrl
            : selectedGameHeroesImages,
      }),
    onSuccess: (newGameAddedToApi: GameAddedToApi) => {
      addGame(newGameAddedToApi.game);
      setTimeout(() => {
        setSavingGameInProgress(false);
        reset();
        setGameSavedToast(true);
      }, 1000);
    },
    retry: 1,
  });

  return mutate;
}

export default useGameAddMutation;
