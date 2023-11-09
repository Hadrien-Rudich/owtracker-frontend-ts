import { useState } from 'react';
import { FaRegSquare, FaCheck } from 'react-icons/fa';

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

function Filters() {
  const [dropDown, setDropDown] = useState(false);
  const [boxIsTicked, SetBoxIsTicked] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleClick = () => {
    SetBoxIsTicked(!boxIsTicked);
  };
  return (
    <div className="flexdiv bg-activeColor w-20 h-8 absolute top-[-2rem] right-0 z-20 rounded-sm">
      <p className="pl-2">FILTER</p>
      {dropDown ? (
        <MdOutlineKeyboardArrowUp
          className="w-4 h-4"
          onClick={toggleDropDown}
        />
      ) : (
        <MdOutlineKeyboardArrowDown
          className="w-4 h-4"
          onClick={toggleDropDown}
        />
      )}
      {dropDown && (
        <div className="absolute top-[2rem] right-0 w-40 h-40 bg-activeColor ring-2 shadow-md">
          <div className="p-2 flex flex-col gap-2 items-start justify-center align-middle w-full h-full bg-activeColor">
            <div className="filterOption_container flexdiv gap-2">
              <p className="w-10 text-left tracking-wider">zob1</p>
              <div className="flex hover:scale-110 relative">
                <button
                  type="button"
                  className={`${
                    boxIsTicked ? 'bg-thirdColor' : 'bg-activeColor'
                  } flex`}
                  onClick={handleClick}
                >
                  <FaRegSquare className=" w-5 h-5 shadow-inner z-10" />
                </button>
                {boxIsTicked && (
                  <FaCheck className="absolute top-[0.25rem] right-[0.25rem] w-3 h-3 z-0 text-activeColor" />
                )}
              </div>
            </div>
            <div className="flexdiv gap-2">
              <p className="w-10 text-left tracking-wider">zob2</p>
              <button type="button" className="flex  hover:scale-110">
                <FaRegSquare className="w-5 h-5 shadow-inner" />
              </button>
            </div>
            <div className="flexdiv gap-2">
              <p className="w-10 text-left tracking-wider">zob3</p>
              <button type="button" className="flex  hover:scale-110">
                <FaRegSquare className="w-5 h-5 shadow-inner" />
              </button>
            </div>
            <div className="flexdiv gap-2">
              <p className="w-10 text-left tracking-wider">zob34</p>
              <button type="button" className="flex  hover:scale-110">
                <FaRegSquare className="w-5 h-5 shadow-inner" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters;
