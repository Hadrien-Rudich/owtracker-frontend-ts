import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import { authStore } from '../../store/authStore';
import Heroes from './Heroes/Heroes';
import Result from './Result/Result';
import Reset from './Reset';
import SubmitGame from './SubmitGame';
import Maps from './Maps/Maps';
import { gameReportStore } from '../../store/gameReportStore';
import { gameStore } from '../../store/gameStore';
import SavedToast from '../SavedToast';
import ScrollIntoView from '../ScrollIntoView';

function Gamereport() {
  const navigate = useNavigate();
  const { gameSavedToast, setGameSavedToast } = gameStore();
  const { isLoggedIn } = authStore();
  const { selectedMap, selectedHeroes, selectedResult, savingGameInProgress } =
    gameReportStore();

  const [shouldScrollIntoHeroes, setShouldScrollIntoHeroes] = useState(false);
  const [shouldScrollIntoMaps, setShouldScrollIntoMaps] = useState(false);
  const [shouldScrollIntoSubmit, setShouldScrollIntoSubmit] = useState(false);

  useEffect(() => {
    const verifyResultIsSelected = () => selectedResult !== '';

    if (verifyResultIsSelected()) {
      setShouldScrollIntoHeroes(true);
    }
  }, [selectedResult]);

  useEffect(() => {
    const verifyHeroesAreSelected = () =>
      selectedResult !== '' && selectedHeroes.length > 0;

    if (verifyHeroesAreSelected()) {
      setShouldScrollIntoMaps(true);
    }
  }, [selectedResult, selectedHeroes]);

  useEffect(() => {
    const verifyEverythingIsSelected = () =>
      selectedResult !== '' && selectedHeroes.length > 0;

    if (verifyEverythingIsSelected()) {
      setShouldScrollIntoSubmit(true);
    }
  }, [selectedResult, selectedHeroes]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="GameReport_container container mx-auto flexdiv relative">
      <div className="lg:mt-[8.5rem] my-24 w-full rounded-sm">
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
          <ScrollIntoView shouldScroll={shouldScrollIntoHeroes}>
            <div className="Heroes_componentcontainer">
              <Heroes />
            </div>
          </ScrollIntoView>
        )}
        {selectedHeroes.length > 0 && selectedResult !== '' && (
          <ScrollIntoView shouldScroll={shouldScrollIntoMaps}>
            <div className="Maps_container">
              <Maps />
            </div>
          </ScrollIntoView>
        )}

        {selectedResult !== '' &&
          selectedMap !== '' &&
          selectedHeroes.length > 0 && (
            <div className="button_container flexdiv gap-10 my-12 relative">
              {!savingGameInProgress ? (
                <ScrollIntoView shouldScroll={shouldScrollIntoSubmit}>
                  <div className="flexdiv gap-6">
                    <Reset />
                    <SubmitGame />
                  </div>
                </ScrollIntoView>
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
