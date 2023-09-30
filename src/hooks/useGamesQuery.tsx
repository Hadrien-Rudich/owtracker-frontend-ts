import { useQuery } from '@tanstack/react-query';
import { fetchGamesFromApi } from '../services/API/games';
import { gameStore } from '../store/gameStore';
import { profileStore } from '../store/profileStore';
import type { GameData } from '../types/store/gameTypes';

export const useGamesQuery = () => {
  const { addGamesData } = gameStore();
  const { selectedProfile } = profileStore();

  const { isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: ['gamesData'],
    queryFn: () =>
      fetchGamesFromApi(selectedProfile.userId, selectedProfile.id),
    onSuccess: (fetchedData: GameData[]) => {
      addGamesData(fetchedData);
    },
    retry: 1,
  });

  return { isLoading, isFetching, isError, isSuccess };
};

export default useGamesQuery;
