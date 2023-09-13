import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
import { authStore } from '../../store/authStore';
import { gameStore } from '../../store/gameStore';
import type { GameData } from '../../types/store/gameTypes';

import { fetchGamesFromApi } from '../../services/ApiService';

import { profileStore } from '../../store/profileStore';
import MonthTabs from './MonthTabs';
import Game from './Game';

function Games() {
  const navigate = useNavigate();

  const { isLoggedIn, userData } = authStore();
  const { addGamesData, gamesData } = gameStore();
  const { profileData } = profileStore();

  // Define a function to fetch games data
  const fetchGamesData = async () => {
    const data = await fetchGamesFromApi(userData.id, profileData.id);
    return data;
  };

  const { isLoading, isFetching, isError, isSuccess } = useQuery(
    ['gamesData'],
    fetchGamesData,
    {
      enabled: isLoggedIn, // Fetch data only when isLoggedIn is true
      onSuccess: (fetchedData: GameData[]) => {
        addGamesData(fetchedData);
      },
    }
  );

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (isLoading || isFetching) {
    return (
      <div className="flexdiv">
        <ProgressBar
          height="300"
          width="300"
          borderColor="#ffffff"
          barColor="#51E5FF"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-24 text-5xl text-activeColor">NO GAMES FOUND</div>
    ); // Handle error state
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
