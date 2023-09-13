import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
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
  const { map, heroes, result, saveGame } = gameReportStore();

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
          <div className="flexdiv gap-10 my-12 relative">
            {!saveGame ? (
              <div className="flexdiv">
                <Reset />

                <SubmitForm />
              </div>
            ) : (
              // <div className="absolute top-[-4] left-0 w-full h-full flex items-center justify-center z-50">
              //   <SavingProgressBar />
              // </div>
              <div className="absolute mt-6">
                <ProgressBar
                  height="300"
                  width="300"
                  borderColor="#ffffff"
                  barColor="#51E5FF"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gamereport;
