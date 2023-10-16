import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import HeroesDropDown from './HeroesDropDown';

function NewGameHeroes() {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);

  return (
    <div className="NewGameHeroes_container relative flexdiv w-[85%]">
      <div className="w-full absolute top-[-1rem] right-[-0.4rem]">
        {/* {isDropDownActive ? ( */}
        <HeroesDropDown toggleDropDown={toggleDropDown} />
        {/* ) : ( */}
        <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />
        {/* )} */}
      </div>
    </div>
  );
}

export default NewGameHeroes;
