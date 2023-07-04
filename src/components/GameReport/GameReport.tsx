import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Heroes from './Heroes/Heroes';
import Result from './Result/Result';
import Reset from './Reset';
import SubmitForm from './SubmitForm';

import { authStore } from '../../store/authStore';
import Maps from './Maps/Maps';

import { gameReportStore } from '../../store/gameReportStore';

function Gamereport() {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const { map, heroes, result: gameResult } = gameReportStore();

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
        {gameResult !== '' && (
          <div className="Heroes_componentcontainer">
            <Heroes />
          </div>
        )}
        {heroes.length > 0 && gameResult !== null && (
          <div className="Maps_container">
            <Maps />
          </div>
        )}

        {gameResult !== '' && map !== '' && heroes.length > 0 && (
          <div className="flexdiv gap-10 my-12">
            <Reset />

            <SubmitForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default Gamereport;
