import { useState, MouseEvent } from 'react';
import { gameReportStore } from '../../../store/gameReportStore';
import { gameStore } from '../../../store/gameStore';
import { getResultClassName } from '../../../utils/utils';

function Result() {
  const { selectedResult, selectResult, unselectResult } = gameReportStore();
  const { setGameSavedToast } = gameStore();

  const [outcomes] = useState([
    { label: 'win' },
    { label: 'loss' },
    { label: 'draw' },
  ]);

  const selectGameResult = (targetResult: string) => {
    setGameSavedToast(false);
    if (targetResult !== selectedResult) {
      selectResult(targetResult);
    } else {
      unselectResult();
    }
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    selectGameResult(event.currentTarget.value);
  };

  return (
    <div className="Result_container flexdiv bg-mainColor rounded-sm intenseShadow">
      <div className="resultoutcome_container flexdiv w-full md:text-xl text-lg rounded-sm divide-x divide-activeGrayColor">
        {outcomes.map((outcome) => (
          <button
            onClick={handleClick}
            key={outcome.label}
            type="button"
            value={outcome.label}
            className={`result-button w-1/3 h-10 tracking-widest rounded-sm duration-150 ease-in-out
            ${getResultClassName(selectedResult, outcome)}`}
          >
            {outcome.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Result;
