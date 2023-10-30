import { useMutation } from '@tanstack/react-query';
import { gameStore } from '../../store/gameStore';
import { profileStore } from '../../store/profileStore';
import { authStore } from '../../store/authStore';
import mockGames from '../../utils/mockGamesUtils';

import {
  addMockGamesToApi,
  MockGamesAddedToApi,
} from '../../services/API/games';

function useMockGameAddMutation() {
  const {
    setSavingGameInProgress,
    setGameToastMessage,
    addMockGames,
    setGameToast,
  } = gameStore();

  const { userData } = authStore();
  const { selectedProfile } = profileStore();

  const { mutate } = useMutation({
    mutationFn: () =>
      addMockGamesToApi(userData.id, selectedProfile.id, mockGames),
    onSuccess: (newGamesAddedToApi: MockGamesAddedToApi) => {
      addMockGames(newGamesAddedToApi.games);
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

export default useMockGameAddMutation;
