import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

import HeroesFiltersOptions from './HeroesFiltersOptions';
import { filterStore } from '../../../../store/filterStore';

function HeroesTab() {
  const {
    expandedFilter,
    setExpandedFilter,
    clearExpandedFilter,
    clearActiveFilter,
  } = filterStore();
  const handleFilterExpandClick = () => {
    if (expandedFilter === 'heroes') {
      clearExpandedFilter();
      return;
    }
    clearActiveFilter();
    setExpandedFilter('heroes');
  };

  return (
    <div className="Filter_container">
      <div className="flex flex-col">
        <button
          type="button"
          className="flex flex-col w-full"
          onClick={handleFilterExpandClick}
        >
          <div className="option_container h-10 flex justify-around w-full ">
            <div className="flex justify-start items-center w-1/2">
              <p className="sm:pl-2 pl-0.5 sm:text-base text-sm tracking-widest ">
                Heroes
              </p>
            </div>
            <div className="button_container relative flex items-center justify-end w-[40%]">
              <div className="relative ">
                {expandedFilter === 'maps' ? (
                  <MdOutlineKeyboardArrowUp className="z-10 w-4 h-4 relative " />
                ) : (
                  <MdOutlineKeyboardArrowDown className="z-10 w-4 h-4 relative " />
                )}
              </div>
            </div>
          </div>
        </button>
      </div>
      {expandedFilter === 'heroes' && (
        <div className="">
          <HeroesFiltersOptions />
        </div>
      )}
    </div>
  );
}

export default HeroesTab;
