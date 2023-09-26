import { useState, MouseEvent } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { getResultClassNameFromGame } from '../../../../utils/utils';
import { gameStore } from '../../../../store/gameStore';

import Date from './Date';
import type { GameData } from '../../../../types/store/gameTypes';

function EditDate({ gameObj }: { gameObj: GameData }) {
  const { selectedGame } = gameStore();
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const handleDropDown = (event: MouseEvent<HTMLButtonElement>) => {
    setIsDropDownActive(!isDropDownActive);
    event.stopPropagation();
  };

  return (
    <div className="EditDate_container relative">
      {selectedGame.id !== gameObj.id ? (
        <Date gameObj={gameObj} />
      ) : (
        <div className=" absolute top-[-0.8rem] right-0 w-full bg-activeColor">
          {isDropDownActive ? (
            <ul className="ring-2">
              <li className="">1/2</li>
              <li className="">1/3</li>
              <li className="">1/4</li>
            </ul>
          ) : (
            <button
              className="w-full relative ring-2 text-base"
              type="button"
              onClick={handleDropDown}
            >
              {selectedGame.date.slice(0, 5)}
              <MdOutlineKeyboardArrowDown className="absolute h-6 w-6 right-[-0.15rem] top-[0rem]" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default EditDate;
