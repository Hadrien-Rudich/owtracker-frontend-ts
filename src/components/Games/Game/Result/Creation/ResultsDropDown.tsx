import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../../store/gameStore';
import { getResultClassNameFromResult } from '../../../../../utils/utils';

interface ResultsDropDownProps {
  toggleDropDown: () => void;
}

function ResultsDropDown({ toggleDropDown }: ResultsDropDownProps) {
  const {
    selectedGame,
    selectGameCurrentResult,
    updateSelectedGame,
    selectedGameResult,
  } = gameStore();

  const results = [{ label: 'Win' }, { label: 'Loss' }, { label: 'Draw' }];

  const selectResult = (result: string) => {
    const formattedResult = result.toLowerCase();
    selectGameCurrentResult(formattedResult);
    updateSelectedGame({ ...selectedGame, result: formattedResult });
    toggleDropDown();
  };

  return (
    <div className="ResultsDropDown_container ring-2 ring-fourthColor">
      <button
        className={`${getResultClassNameFromResult(
          selectedGameResult
        )} w-full relative`}
        type="button"
        onClick={toggleDropDown}
      >
        <p>{selectedGameResult}</p>
      </button>
      <MdOutlineKeyboardArrowDown className="absolute h-4 w-4 top-[0.3rem] right-[-0.1rem] pointer-events-none" />
      <ul className="">
        {results.map(
          (result) =>
            result.label.toLowerCase() !== selectedGameResult && (
              <li key={result.label}>
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
          // )
        )}
      </ul>
    </div>
  );
}

export default ResultsDropDown;
