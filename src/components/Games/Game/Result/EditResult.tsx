import { useState, MouseEvent } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../store/gameStore';
import { getResultClassNameFromGame } from '../../../../utils/utils';
import Result from './Result';
import type { GameData } from '../../../../types/store/gameTypes';

function EditResult({ gameObj }: { gameObj: GameData }) {
  const { selectedGame } = gameStore();
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const handleDropDown = (event: MouseEvent<HTMLButtonElement>) => {
    setIsDropDownActive(!isDropDownActive);
    event.stopPropagation();
  };

  return (
    <div className="EditResult_container relative">
      {selectedGame.id !== gameObj.id ? (
        <Result gameObj={gameObj} />
      ) : (
        <div className="absolute top-[-0.8rem] right-0 w-full">
          {isDropDownActive ? (
            <ul className="ring-2">
              <li className="bg-activeWin">Win</li>
              <li className="bg-activeLoss">Loss</li>
              <li className="bg-activeDraw">Draw</li>
            </ul>
          ) : (
            <button
              className={`${getResultClassNameFromGame(
                gameObj
              )} w-full relative ring-2`}
              type="button"
              onClick={handleDropDown}
            >
              {selectedGame.result.slice(0, 1)}
              <MdOutlineKeyboardArrowDown className="absolute h-6 w-6 right-[-0.15rem] top-[0rem]" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default EditResult;
