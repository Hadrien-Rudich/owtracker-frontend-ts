import { useEffect } from 'react';
import {
  fetchHeroesFromApi,
  fetchRolesFromApi,
} from '../../../services/ApiService';
import { gameReportStore } from '../../../store/gameReportStore';
import Hero from './Hero';

function Heroes() {
  const { addHeroesData, addRolesData } = gameReportStore();

  useEffect(() => {
    async function getHeroesData() {
      try {
        const data = await fetchHeroesFromApi();
        addHeroesData(data);
      } catch (error) {
        console.error('Failed to fetch heroes data', error);
      }
    }

    getHeroesData();
  }, [addHeroesData]);

  useEffect(() => {
    async function getRolesData() {
      try {
        const data = await fetchRolesFromApi();
        addRolesData(data);
      } catch (error) {
        console.error('Failed to fetch roles data', error);
      }
    }

    getRolesData();
  }, [addRolesData]);

  return (
    <div className="heroes_container bg-mainColor rounded-sm my-6 intenseShadow">
      <Hero />
    </div>
  );
}

export default Heroes;
