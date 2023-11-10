import { useState } from 'react';
import { FaRegSquare, FaCheck } from 'react-icons/fa';
import ClearResultFilters from './ClearResultFilters';

function ResultFilters() {
  const [filterBoxIsTicked, setFilterBoxIsTicked] = useState(false);
  const [winIsTicked, setWinIsTicked] = useState(false);
  const [lossIsTicked, setLossIsTicked] = useState(false);
  const [drawIsTicked, setDrawIsTicked] = useState(false);

  const handleFilterClick = () => {
    setFilterBoxIsTicked(!filterBoxIsTicked);
  };

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
    <div className="Filter_container relative ring-2 shadow-md rounded-sm">
      <div className="flex flex-col ">
        <div className="option_container  flex justify-around w-full ">
          <div className="flexdiv w-1/2">
            <p className=" tracking-widest ">Result</p>
          </div>
          <div className="button_container flexdiv w-1/2">
            <button
              type="button"
              className="z-10 w-5 h-5 hover:scale-110"
              onClick={handleFilterClick}
            >
              <FaRegSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
        {filterBoxIsTicked && (
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
        )}
      </div>
      {filterBoxIsTicked && (
        <>
          <div className="clearFilter_container">
            {!lossIsTicked && !winIsTicked && !drawIsTicked ? null : (
              <ClearResultFilters
                winBooleanSetter={setWinIsTicked}
                lossBooleanSetter={setLossIsTicked}
                drawBooleanSetter={setDrawIsTicked}
              />
            )}
          </div>
          <div className="z-0 absolute top-[0.25rem] right-[1.5rem] bg-ringColor w-4 h-4 rounded-sm">
            <FaCheck className="absolute top-0.5 right-0.5 w-3 h-3 z-0" />
          </div>
        </>
      )}
    </div>
  );
}

export default ResultFilters;
