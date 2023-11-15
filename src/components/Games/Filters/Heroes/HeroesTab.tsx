import { useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import ExpandedTab from './ExpandedTab';

function HeroesTab() {
  const [expandedTab, setExpandedTab] = useState(false);
  const toggleExpandTab = () => {
    setExpandedTab(!expandedTab);
  };

  return (
    <div className="Filter_container">
      <div className="">
        <button type="button" className=" w-full" onClick={toggleExpandTab}>
          <div className="option_container h-10 flex justify-around w-full ">
            <div className="flex justify-start items-center w-1/2">
              <p className="sm:pl-2 pl-0.5 sm:text-base text-sm tracking-widest ">
                Heroes
              </p>
            </div>
            <div className="button_container relative flex items-center justify-end w-[40%]">
              <div className="relative ">
                {expandedTab ? (
                  <MdOutlineKeyboardArrowUp className="z-10 w-4 h-4 relative " />
                ) : (
                  <MdOutlineKeyboardArrowDown className="z-10 w-4 h-4 relative " />
                )}
              </div>
            </div>
          </div>
        </button>
      </div>
      {expandedTab && <ExpandedTab />}
    </div>
  );
}

export default HeroesTab;
