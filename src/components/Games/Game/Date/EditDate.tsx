import { useState } from 'react';
import { gameStore } from '../../../../store/gameStore';

import Date from './Date';
import type { GameData } from '../../../../types/store/gameTypes';
import DateWidget from './DateWidget';

function EditDate({ gameObj }: { gameObj: GameData }) {
  const { selectedGame } = gameStore();
  const [, setIsDropDownActive] = useState(false);
  const [, setNewDate] = useState<string>('');

  return (
    <div className="EditDate_container relative">
      {selectedGame.id !== gameObj.id ? (
        <Date gameObj={gameObj} />
      ) : (
        <div className=" absolute top-[-0.8rem] right-0 w-full bg-activeColor">
          <DateWidget
            setIsDropDownActive={setIsDropDownActive}
            setNewDate={setNewDate}
            gameObj={gameObj}
          />
        </div>
      )}
    </div>
  );
}

export default EditDate;
