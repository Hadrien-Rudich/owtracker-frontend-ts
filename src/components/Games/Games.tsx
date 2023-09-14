import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import { authStore } from '../../store/authStore';
import { gameStore } from '../../store/gameStore';

import { fetchGamesFromApi } from '../../services/ApiService';

import { profileStore } from '../../store/profileStore';
import MonthTabs from './MonthTabs';
import Game from './Game';

function Games() {
  const navigate = useNavigate();

  const { isLoggedIn, userData } = authStore();
  const { addGamesData, gamesData } = gameStore();
  const { profileData } = profileStore();

  const { isLoading, isFetching, isError, isSuccess } = useQuery(
    ['gamesData'],
    async () => {
      const data = await fetchGamesFromApi(userData.id, profileData.id);
      addGamesData(data);
      return data;
    }
  );

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <div className="mt-24 text-5xl text-activeColor">NO GAMES FOUND</div>
    );
  }

  if (isSuccess && gamesData.length > 0) {
    return (
      <div className="History_container lg:mt-[8.5rem] my-24 container mx-auto">
        <div className="MonthTabs_container">
          <MonthTabs />
        </div>
        <div className="HistoryDetails_container mt-12">
          <Game />
        </div>
      </div>
    );
  }
}
export default Games;
