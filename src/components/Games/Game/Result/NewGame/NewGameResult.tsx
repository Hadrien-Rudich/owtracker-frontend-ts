import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../../store/gameStore';
import { getResultClassNameFromResult } from '../../../../../utils/classNameUtils';
import ResultsDropDown from './ResultsDropDown';
import ErrorToast from '../../../../ErrorToast';

function NewGameResult() {
  const {
    selectedGameResult,
    resultErrorToast,
    resultErrorToastMessage,
    setResultErrorToast,
  } = gameStore();

  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);

  return (
    <div className="NewGameResult_container relative">
      {resultErrorToast && (
        <ErrorToast
          toastText={resultErrorToastMessage}
          booleanProp={resultErrorToast}
          booleanPropSetter={setResultErrorToast}
          topProp="top-[-5.45rem]"
          leftProp="right-[-3rem]"
        />
      )}

      <div className="absolute w-full top-[-0.75rem] right-0  bg-activeColor">
        {isDropDownActive ? (
          <ResultsDropDown toggleDropDown={toggleDropDown} />
        ) : (
          <div>
            {selectedGameResult !== '' ? (
              <button
                className={`${getResultClassNameFromResult(
                  selectedGameResult
                )} w-full relative ring-2`}
                type="button"
                onClick={toggleDropDown}
              >
                {selectedGameResult}
              </button>
            ) : (
              <button
                className={`${getResultClassNameFromResult(
                  selectedGameResult
                )} w-full relative ring-2 `}
                type="button"
                onClick={toggleDropDown}
              >
                <div className="result_container flexdiv ">
                  <div className="flexdiv">
                    <p className="">RESULT</p>
                  </div>
                </div>
              </button>
            )}
            <MdOutlineKeyboardArrowDown className="absolute h-4 w-4 top-[0.3rem] right-[-0.1rem] pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewGameResult;
