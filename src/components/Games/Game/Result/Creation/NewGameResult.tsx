import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../../store/gameStore';
// import { getResultClassNameFromResult } from '../../../../../utils/utils';
// import Result from '../Result';
// import type { GameData } from '../../../../../types/store/gameTypes';
import ResultsDropDown from './ResultsDropDown';

function NewGameResult() {
  const { selectedGame } = gameStore();

  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);

  return (
    <div className="EditResult_container relative">
      <div className="absolute w-full top-[-0.75rem] right-0 ">
        <ResultsDropDown toggleDropDown={toggleDropDown} />
        <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />
      </div>
    </div>
  );
}

export default NewGameResult;
