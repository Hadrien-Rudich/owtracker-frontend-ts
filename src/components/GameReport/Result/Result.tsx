import { useState, MouseEvent } from 'react';
import { gameReportStore } from '../../../store/gameReportStore';
import { gameStore } from '../../../store/gameStore';
import { getResultClassName } from '../../../utils/utils';

function Result() {
  const { selectedResult, selectResult, unselectResult } = gameReportStore();
  const { setGameSavedToast } = gameStore();

  const [results] = useState([
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
      <div className="resultoutcome_container flexdiv w-full md:text-xl text-lg rounded-sm divide-x divide-activeColor">
        {results.map((result) => (
          <button
            onClick={handleClick}
            key={result.label}
            type="button"
            value={result.label}
            className={`result-button w-1/3 h-10 tracking-widest rounded-sm duration-150 ease-in-out
            ${getResultClassName(selectedResult, result)}`}
          >
            {result.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Result;
