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
    <div className="Filters_container relative bg-activeColor ">
      <div className="flexdiv w-20 h-8 z-20 rounded-sm">
        <div className="flexdiv">
          <p className="pl-2 tracking-widest">FILTER</p>
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
    </div>
  );
}

export default FilterTab;
