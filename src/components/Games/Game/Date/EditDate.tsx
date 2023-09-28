import { useState } from 'react';
import { gameStore } from '../../../../store/gameStore';

import Date from './Date';
import type { GameData } from '../../../../types/store/gameTypes';
import DateWidget from './DateWidget';

function EditDate({ gameObj }: { gameObj: GameData }) {
  const { selectedGame } = gameStore();
  const [, setIsDropDownActive] = useState(false);

  return (
    <div className="EditDate_container relative">
      {selectedGame.id !== gameObj.id ? (
        <Date gameObj={gameObj} />
      ) : (
        <div className=" absolute top-[-0.8rem] right-0 w-full bg-activeColor">
          <DateWidget
            setIsDropDownActive={setIsDropDownActive}
            gameObj={gameObj}
          />
        </div>
      )}
    </div>
  );
}

export default EditDate;
