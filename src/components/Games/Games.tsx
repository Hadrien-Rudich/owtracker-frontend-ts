import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
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

  // Define a function to fetch games data
  const fetchGamesData = async () => {
    const data = await fetchGamesFromApi(userData.id, profileData.id);
    return data;
  };

  // Use useQuery to fetch and cache games data
  const { isLoading, isError } = useQuery(['gamesData'], fetchGamesData, {
    enabled: isLoggedIn, // Fetch data only when isLoggedIn is true
    onSuccess: (fetchedData) => {
      // Update the gameStore with the fetched data
      addGamesData(fetchedData);
      console.log('I am GAMES the parent', gamesData);
    },
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // Handle loading state
  }

  if (isError) {
    return <div>Error fetching data</div>; // Handle error state
  }
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
