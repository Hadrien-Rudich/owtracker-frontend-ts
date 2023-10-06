import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../store/gameStore';
import { getResultClassNameFromResult } from '../../../../utils/utils';
import Result from './Result';
import type { GameData } from '../../../../types/store/gameTypes';
import ResultsDropDown from './ResultsDropDown';

function EditResult({ gameObj }: { gameObj: GameData }) {
  const { selectedGame, selectedGameResult } = gameStore();

  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);

  if (selectedGame.id !== gameObj.id) {
    return <Result gameObj={gameObj} />;
  }

  return (
    <div className="EditResult_container relative">
      <div className="absolute w-full top-[-0.75rem] right-0 ">
        {isDropDownActive ? (
          <ResultsDropDown gameObj={gameObj} toggleDropDown={toggleDropDown} />
        ) : (
          <div>
            {selectedGame.result === gameObj.result ? (
              <button
                className={`${getResultClassNameFromResult(
                  gameObj.result
                )} w-full relative ring-2`}
                type="button"
                onClick={toggleDropDown}
              >
                <Result gameObj={gameObj} />
              </button>
            ) : (
              <button
                className={`${getResultClassNameFromResult(
                  selectedGame.result
                )} w-full relative ring-2`}
                type="button"
                onClick={toggleDropDown}
              >
                <Result gameObj={selectedGame} />
              </button>
            )}
            <MdOutlineKeyboardArrowDown className="absolute h-4 w-4 top-[0.3rem] right-[-0.1rem] pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
}

export default EditResult;
