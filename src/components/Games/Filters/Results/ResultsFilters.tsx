import { useState } from 'react';

function ResultsFilters() {
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
    <div className="p-4 bg-activeColor flexdiv col">
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
          <p className="tracking-widest">win</p>
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
          <p className="tracking-widest">loss</p>
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
          <p className="tracking-widest">draw</p>
        </button>
      </div>
    </div>
  );
}

export default ResultsFilters;
