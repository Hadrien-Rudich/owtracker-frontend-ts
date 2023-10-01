import { useQueries } from '@tanstack/react-query';
import {
  fetchHeroesFromApi,
  fetchRolesFromApi,
} from '../../services/API/gameReport';
import { gameReportStore } from '../../store/gameReportStore';

import type { HeroData, RoleData } from '../../types/store/gameReportTypes';

export const useHeroesQueries = () => {
  const { addHeroesData, addRolesData } = gameReportStore();

  useQueries({
    queries: [
      {
        queryKey: ['heroesData'],
        queryFn: fetchHeroesFromApi,
        onSuccess: (fetchedData: HeroData[]) => {
          addHeroesData(fetchedData);
        },
        staleTime: 1000 * 60 * 60 * 24 * 30,
        cacheTime: 1000 * 60 * 60 * 24 * 30 * 30,
      },

      {
        queryKey: ['rolesData'],
        queryFn: fetchRolesFromApi,
        onSuccess: (fetchedData: RoleData[]) => {
          addRolesData(fetchedData);
        },
        staleTime: 1000 * 60 * 60 * 24 * 30,
        cacheTime: 1000 * 60 * 60 * 24 * 30 * 30,
      },
    ],
  });
};

export default useHeroesQueries;
