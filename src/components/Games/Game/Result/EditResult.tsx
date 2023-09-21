import React, { useState, MouseEvent } from 'react';
import { gameStore } from '../../../../store/gameStore';
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
    <div className="Result_container relative">
      {selectedGame.id !== gameObj.id ? (
        <Result gameObj={gameObj} />
      ) : (
        <div className="ring-2 ring-fourthColor">
          {isDropDownActive ? (
            <ul>
              <li className="bg-activeWin">Win</li>
              <li className="bg-activeLoss">Loss</li>
              <li className="bg-activeDraw">Draw</li>
            </ul>
          ) : (
            <button
              className="w-full bg-fourthColor"
              type="button"
              onClick={handleDropDown}
            >
              \/
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default EditResult;
