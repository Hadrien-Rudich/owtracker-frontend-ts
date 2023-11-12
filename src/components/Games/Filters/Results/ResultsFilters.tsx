import { useState } from 'react';
import { filterStore } from '../../../../store/filterStore';
import ClearResultFilters from './ClearResultFilters';

function ResultsFilters() {
  const { activeFilter } = filterStore();
  const [winIsTicked, setWinIsTicked] = useState(false);
  const [lossIsTicked, setLossIsTicked] = useState(false);
  const [drawIsTicked, setDrawIsTicked] = useState(false);

  const handleWinClick = () => {
    setWinIsTicked(!winIsTicked);
  };

  const handleLossClick = () => {
    setLossIsTicked(!lossIsTicked);
  };

  const handleDrawClick = () => {
    setDrawIsTicked(!drawIsTicked);
  };
  return (
    <div className="ResultsFilters_container w-1/4">
      <div className="options_container flexdiv col w-full gap-3">
        <button
          type="button"
          onClick={handleWinClick}
          className={`${
            winIsTicked
              ? 'active bg-activeWin '
              : 'inactive hover:bg-activeWin '
          }              
      filter`}
        >
          <p className="xl:tracking-widest">win</p>
        </button>
        <button
          type="button"
          onClick={handleLossClick}
          className={`${
            lossIsTicked
              ? 'active bg-activeLoss '
              : 'inactive hover:bg-activeLoss'
          }              
      filter`}
        >
          <p className="xl:tracking-widest">loss</p>
        </button>
        <button
          type="button"
          onClick={handleDrawClick}
          className={`${
            drawIsTicked
              ? 'active bg-activeDraw '
              : 'inactive hover:bg-activeDraw'
          }              
      filter`}
        >
          <p className="xl:tracking-widest">draw</p>
        </button>
      </div>
      {activeFilter === 'results' && (
        <div className="clearFilter_container absolute bottom-[-2rem] left-[0.75rem]">
          {!lossIsTicked && !winIsTicked && !drawIsTicked ? null : (
            <ClearResultFilters
              winBooleanSetter={setWinIsTicked}
              lossBooleanSetter={setLossIsTicked}
              drawBooleanSetter={setDrawIsTicked}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ResultsFilters;
