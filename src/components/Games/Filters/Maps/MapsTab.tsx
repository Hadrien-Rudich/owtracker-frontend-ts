import { useState } from 'react';
import { FaRegSquare, FaCheck } from 'react-icons/fa';

function MapTab() {
  const [filterBoxIsTicked, setFilterBoxIsTicked] = useState(false);
  const [winIsTicked, setWinIsTicked] = useState(false);
  const [lossIsTicked, setLossIsTicked] = useState(false);
  const [drawIsTicked, setDrawIsTicked] = useState(false);

  const handleFilterClick = () => {
    setFilterBoxIsTicked(!filterBoxIsTicked);
  };

  return (
    <div className="Filter_container relative">
      <div className="flex flex-col">
        <div className="option_container h-10 flex justify-around w-full ">
          <div className="flex justify-start items-center w-1/2">
            <p className="sm:pl-2 pl-0.5 sm:text-base text-sm tracking-widest ">
              Maps
            </p>
          </div>
          <div className="button_container relative flex items-center sm:justify-center justify-end w-[40%]">
            <button
              type="button"
              className="w-5 h-5 hover:scale-110"
              onClick={handleFilterClick}
            >
              <FaRegSquare className="z-10 w-5 h-5 relative" />
              {filterBoxIsTicked && (
                <div className="z-0 absolute top-[0.15rem] right-[0.15rem] bg-ringColor w-4 h-4 rounded-sm">
                  <FaCheck className="absolute top-0.5 right-0.5 w-3 h-3 z-0" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapTab;
