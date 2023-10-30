import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import { authStore } from '../../store/authStore';
import { gameStore } from '../../store/gameStore';
import SavedToast from '../SavedToast';
import { useGamesQuery } from '../../hooks/games/useGamesQuery';
// import MonthTabs from './MonthTabs';
import Game from './Game';
import MockGamesCreation from './MockGamesCreation';

function Games() {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const { gamesData, gameToast, setGameToast, gameToastMessage } = gameStore();
  const {
    isLoading,
    isFetching,
    isError,
    // isSuccess
  } = useGamesQuery();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="Games_container lg:my-[8.5rem] my-[4.5rem] container mx-auto rounded-sm relative">
      {isError && gamesData.length === 0 && (
        <div className="absolute top-[-5.5rem] right-1/4 left-1/4 text-5xl w-1/2 text-activeColor ">
          NO GAMES FOUND
        </div>
      )}
      <SavedToast
        toastText={gameToastMessage}
        booleanProp={gameToast}
        setBooleanProp={setGameToast}
      />
      <MockGamesCreation />

      <div className="Game_container">
        <Game />
      </div>
    </div>
  );
}

export default Games;
