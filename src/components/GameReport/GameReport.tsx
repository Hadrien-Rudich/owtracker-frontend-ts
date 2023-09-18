import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';

import { authStore } from '../../store/authStore';

import Heroes from './Heroes/Heroes';
import Result from './Result/Result';
import Reset from './Reset';
import SubmitForm from './SubmitForm';
import Maps from './Maps/Maps';
// import SavingProgressBar from './SavingProgressBar';
import { gameReportStore } from '../../store/gameReportStore';

function Gamereport() {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const {
    selectedMap: map,
    selectedHeroes: heroes,
    selectedResult: result,
    saveGame,
  } = gameReportStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  });

  return (
    <div className="GameReport_container container mx-auto flexdiv">
      <div className="lg:mt-[8.5rem] my-24 w-full rounded-sm">
        <div className="Result_container">
          <Result />
        </div>
        {result !== '' && (
          <div className="Heroes_componentcontainer">
            <Heroes />
          </div>
        )}
        {heroes.length > 0 && result !== null && (
          <div className="Maps_container">
            <Maps />
          </div>
        )}

        {result !== '' && map !== '' && heroes.length > 0 && (
          <div className="button_container flexdiv gap-10 my-12 relative">
            {!saveGame ? (
              <div className="flexdiv gap-6">
                <Reset />

                <SubmitForm />
              </div>
            ) : (
              <div className="absolute mt-6">
                <LoadingSpinner />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gamereport;
