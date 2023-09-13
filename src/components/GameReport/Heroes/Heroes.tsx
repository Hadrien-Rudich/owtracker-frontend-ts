import { useQueries } from '@tanstack/react-query';
import type { HeroData, RoleData } from '../../../types/store/gameReportTypes';
import {
  fetchHeroesFromApi,
  fetchRolesFromApi,
} from '../../../services/ApiService';
import { gameReportStore } from '../../../store/gameReportStore';
import Hero from './Hero';

function Heroes() {
  const { addHeroesData, addRolesData } = gameReportStore();

  const results = useQueries({
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

  // if (results.some((result) => result.isLoading)) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="heroes_container bg-mainColor rounded-sm my-6 intenseShadow">
      <Hero />
    </div>
  );
}

export default Heroes;
