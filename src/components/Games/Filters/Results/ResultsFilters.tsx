// import { useState } from 'react';
import { filterStore } from '../../../../store/filterStore';
import ClearResultFilters from './ClearResultFilters';

function ResultsFilters() {
  const { activeFilter, filterResult, unfilterResult, filteredResults } =
    filterStore();

  const handleResultClick = (result: string) => {
    if (filteredResults.includes(result)) {
      unfilterResult(result);
    } else {
      filterResult(result);
    }
  };

  return (
    <div className="ResultsFilters_container w-1/4">
      <div className="options_container flexdiv col w-full gap-3">
        <button
          type="button"
          onClick={() => handleResultClick('win')}
          className={`${
            filteredResults.includes('win')
              ? 'active bg-activeWin '
              : 'inactive hover:bg-activeWin '
          }              
      filter`}
        >
          <p className="xl:tracking-widest">win</p>
        </button>
        <button
          type="button"
          onClick={() => handleResultClick('loss')}
          className={`${
            filteredResults.includes('loss')
              ? 'active bg-activeLoss '
              : 'inactive hover:bg-activeLoss'
          }              
      filter`}
        >
          <p className="xl:tracking-widest">loss</p>
        </button>
        <button
          type="button"
          onClick={() => handleResultClick('draw')}
          className={`${
            filteredResults.includes('draw')
              ? 'active bg-activeDraw '
              : 'inactive hover:bg-activeDraw'
          }              
      filter`}
        >
          <p className="xl:tracking-widest">draw</p>
        </button>
      </div>
      {activeFilter === 'results' && filteredResults.length > 0 && (
        <ClearResultFilters />
      )}
    </div>
  );
}

export default ResultsFilters;
