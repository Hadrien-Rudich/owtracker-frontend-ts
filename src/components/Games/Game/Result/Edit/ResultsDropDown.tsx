import { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../../store/gameStore';
import { getResultClassNameFromResult } from '../../../../../utils/utils';
import type { GameData } from '../../../../../types/store/gameTypes';
import Result from '../Result';

interface ResultsDropDownProps {
  gameObj: GameData;
  toggleDropDown: () => void;
}

function ResultsDropDown({ gameObj, toggleDropDown }: ResultsDropDownProps) {
  const { selectedGame, selectGameCurrentResult, updateSelectedGame } =
    gameStore();

  const results = [{ label: 'Win' }, { label: 'Loss' }, { label: 'Draw' }];

  const [currentGame, setCurrentGame] = useState<GameData>(gameObj);

  useEffect(() => {
    setCurrentGame((prevGame) => ({
      ...prevGame,
      result: selectedGame.result,
    }));
  }, [selectedGame.result]);

  const selectResult = (result: string) => {
    const formattedResult = result.toLowerCase();
    selectGameCurrentResult(formattedResult);
    updateSelectedGame({ ...selectedGame, result: formattedResult });
    toggleDropDown();
  };

  return (
    <div className="ring-2 ring-thirdColor">
      <button
        className={`${getResultClassNameFromResult(
          currentGame.result.charAt(0).toUpperCase() +
            currentGame.result.slice(1)
        )} w-full relative`}
        type="button"
        onClick={toggleDropDown}
      >
        <Result gameObj={currentGame} />
      </button>
      <MdOutlineKeyboardArrowDown className="absolute h-4 w-4 top-[0.3rem] right-[-0.1rem] pointer-events-none" />

      <ul className="">
        {results.map(
          (result) =>
            result.label.toLowerCase() !==
              selectedGame.result.toLowerCase() && (
              <li key={(gameObj.id, result.label)}>
                <button
                  type="button"
                  className={`w-full bg-activeColor bg-active${result.label} hover:bg-activeColor`}
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
  );
}

export default ResultsDropDown;
