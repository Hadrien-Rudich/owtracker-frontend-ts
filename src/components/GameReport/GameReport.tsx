import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';

import { authStore } from '../../store/authStore';

import Heroes from './Heroes/Heroes';
import Result from './Result/Result';
import Reset from './Reset';
import SubmitForm from './SubmitForm';
import Maps from './Maps/Maps';
import { gameReportStore } from '../../store/gameReportStore';
import { gameStore } from '../../store/gameStore';
import SavedToast from '../SavedToast';

function Gamereport() {
  const navigate = useNavigate();

  const { gameSavedToast, setGameSavedToast } = gameStore();
  const { isLoggedIn } = authStore();
  const { selectedMap, selectedHeroes, selectedResult, savingGameInProgress } =
    gameReportStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  });

  return (
    <div className="GameReport_container container mx-auto flexdiv relative">
      <div className="lg:mt-[8.5rem] my-24 w-full rounded-sm ">
        <SavedToast
          topPosition="top-1/4"
          toastText="Game saved!"
          booleanProp={gameSavedToast}
          setBooleanProp={setGameSavedToast}
        />
        <div className="Result_container">
          <Result />
        </div>
        {selectedResult !== '' && (
          <div className="Heroes_componentcontainer">
            <Heroes />
          </div>
        )}
        {selectedHeroes.length > 0 && selectedResult !== null && (
          <div className="Maps_container">
            <Maps />
          </div>
        )}

        {selectedResult !== '' &&
          selectedMap !== '' &&
          selectedHeroes.length > 0 && (
            <div className="button_container flexdiv gap-10 my-12 relative">
              {!savingGameInProgress ? (
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
