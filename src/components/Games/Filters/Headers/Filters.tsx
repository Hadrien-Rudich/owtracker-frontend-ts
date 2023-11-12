import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { filterStore } from '../../../../store/filterStore';
import { gameStore } from '../../../../store/gameStore';

function FilterTab() {
  const { filterDropDown, setFilterDropDown } = filterStore();
  const { isUpdatingGame, setIsUpdatingGame, unselectGame } = gameStore();

  const toggleFilterDropDown = () => {
    unselectGame();
    setIsUpdatingGame(!isUpdatingGame);
    setFilterDropDown(!filterDropDown);
  };

  return (
    <div className="Filters_container flexdiv w-full h-8 relative bg-activeColor ">
      <div className="flexdiv relative">
        <p className="sm:pl-2 pl-1 sm:text-base text-sm tracking-widest">
          FILTER
        </p>
        {filterDropDown ? (
          <MdOutlineKeyboardArrowUp
            className="w-4 h-4"
            onClick={toggleFilterDropDown}
          />
        ) : (
          <MdOutlineKeyboardArrowDown
            className="w-4 h-4"
            onClick={toggleFilterDropDown}
          />
        )}
      </div>
    </div>
  );
}

export default FilterTab;
