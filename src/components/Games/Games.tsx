import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import { authStore } from '../../store/authStore';
import { gameStore } from '../../store/gameStore';
import SavedToast from '../SavedToast';
import { useGamesQuery } from '../../hooks/games/useGamesQuery';
import MonthTabs from './MonthTabs';
import Game from './Game/Game';

function Games() {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const { gamesData, gameSavedToast, setGameSavedToast } = gameStore();

  const { isLoading, isFetching, isError, isSuccess } = useGamesQuery();

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
      <div className="History_container lg:mt-[6rem] my-24 container mx-auto">
        <SavedToast
          topPosition="top-[12.5rem]"
          toastText="Game updated!"
          booleanProp={gameSavedToast}
          setBooleanProp={setGameSavedToast}
        />
        <div className="MonthTabs_container">
          <MonthTabs />
        </div>
        <div className="HistoryDetails_container">
          <Game />
        </div>
      </div>
    );
  }
}
export default Games;
