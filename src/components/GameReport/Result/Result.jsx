import React, { useState } from 'react';
import gameReportStore from '../../../store/gameReportStore';
import { getResultClassName } from '../../../utils/outcomes';

function Result() {
  const { gameResult, addGameResult, clearGameResult } = gameReportStore();

  const [outcomes] = useState([
    { label: 'win' },
    { label: 'draw' },
    { label: 'loss' },
  ]);

  const toggleGameResult = (selectedResult) => {
    if (selectedResult !== gameResult) {
      addGameResult(selectedResult);
    } else {
      clearGameResult();
    }
  };

  const handleClick = (e) => {
    toggleGameResult(e.target.value);
  };

  return (
    <div className="Result_container flexdiv bg-mainColor rounded-sm intenseShadow">
      <div className="resultoutcome_container flexdiv w-full md:text-xl text-lg rounded-sm">
        {outcomes.map((outcome) => (
          <button
            onClick={handleClick}
            key={outcome.label}
            type="button"
            value={outcome.label}
            className={`result-button w-1/3 h-10 tracking-widest rounded-sm duration-150 ease-in-out
            ${getResultClassName(gameResult, outcome)}`}
          >
            {outcome.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Result;
