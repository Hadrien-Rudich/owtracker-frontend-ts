import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../../store/gameStore';
import { getResultClassNameFromResult } from '../../../../../utils/classNameUtils';
import Result from '../Result';
import type { GameData } from '../../../../../types/store/gameTypes';
import ResultsDropDown from './ResultsDropDown';

function EditResult({ gameObj }: { gameObj: GameData }) {
  const { selectedGame } = gameStore();

  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);

  if (selectedGame.id !== gameObj.id) {
    return <Result gameObj={gameObj} />;
  }

  return (
    <div className="EditResult_container">
      <div className="results_container flexdiv w-full relative ">
        {isDropDownActive ? (
          <ResultsDropDown gameObj={gameObj} toggleDropDown={toggleDropDown} />
        ) : (
          <div className="w-[90%]">
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
            <MdOutlineKeyboardArrowDown className="absolute h-4 w-4 top-[0.3rem] right-[0.22rem] pointer-events-none lg:block hidden" />
          </div>
        )}
      </div>
    </div>
  );
}

export default EditResult;
