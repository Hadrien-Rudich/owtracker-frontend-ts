import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../store/gameStore';
import { getResultClassNameFromResult } from '../../../../utils/utils';
import Result from './Result';
import type { GameData } from '../../../../types/store/gameTypes';

function EditResult({ gameObj }: { gameObj: GameData }) {
  const { selectedGame } = gameStore();

  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [currentResult, setCurrentResult] = useState<string>(gameObj.result);
  const [newResult, setNewResult] = useState<string>('');
  const results = [{ label: 'Win' }, { label: 'Loss' }, { label: 'Draw' }];

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);

  const selectResult = (result: string) => {
    setNewResult(result.toLowerCase());
    setCurrentResult(result.toLowerCase());
    setIsDropDownActive(false);
  };

  if (selectedGame.id !== gameObj.id) {
    return <Result gameObj={gameObj} />;
  }

  return (
    <div className="EditResult_container relative">
      <div className="absolute top-[-0.8rem] right-0 w-full">
        {isDropDownActive ? (
          <div className="ring-2">
            <button
              className={`${getResultClassNameFromResult(
                newResult === '' ? selectedGame.result : newResult
              )} w-full relative`}
              type="button"
              onClick={toggleDropDown}
            >
              {/* {newResult === '' ? selectedGame.result.slice(0, 1) : newResult} */}
              {newResult === '' ? selectedGame.result : newResult}
            </button>
            <MdOutlineKeyboardArrowDown className="absolute h-4 w-4 top-[0.3rem] right-[-0.1rem] pointer-events-none" />

            <ul className=" relative top-0.25">
              {results.map(
                (result) =>
                  result.label.toLowerCase() !==
                    // newResult.toLocaleLowerCase() && (
                    currentResult && (
                    <li key={result.label}>
                      <button
                        type="button"
                        className={`w-full bg-active${result.label}`}
                        onClick={() => selectResult(result.label)}
                        id={result.label}
                      >
                        <p>{result.label}</p>
                      </button>
                    </li>
                  )
              )}
            </ul>
          </div>
        ) : (
          <div>
            <button
              className={`${getResultClassNameFromResult(
                newResult === '' ? selectedGame.result : newResult
              )} w-full relative ring-2`}
              type="button"
              onClick={toggleDropDown}
            >
              {/* {newResult === '' ? selectedGame.result.slice(0, 1) : newResult} */}
              {newResult === '' ? selectedGame.result : newResult}
            </button>
            <MdOutlineKeyboardArrowDown className="absolute h-4 w-4 top-[0.3rem] right-[-0.1rem] pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
}

export default EditResult;
