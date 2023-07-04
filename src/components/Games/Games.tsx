import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    async function getGamesData() {
      try {
        const data = await fetchGamesFromApi(userData.id, profileData.id);
        addGamesData(data);
        console.log('I am gamesData', gamesData);
      } catch (error) {
        console.error('Failed to fetch history data', error);
      }
    }

    getGamesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addGamesData, userData, profileData.id]);

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

export default Games;
