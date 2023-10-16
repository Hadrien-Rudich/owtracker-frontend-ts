import { useState } from 'react';

import Date from '../Date';
// import type { GameData } from '../../../../../types/store/gameTypes';
import DateWidget from './DateWidget';

function NewGameDate() {
  const [, setIsDropDownActive] = useState(false);

  return (
    <div className="EditDate_container relative">
      <div className=" absolute top-[-0.75rem] right-0 w-full bg-activeColor">
        <DateWidget setIsDropDownActive={setIsDropDownActive} />
      </div>
    </div>
  );
}

export default NewGameDate;
