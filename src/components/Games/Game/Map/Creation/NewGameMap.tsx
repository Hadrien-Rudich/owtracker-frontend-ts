import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import MapsDropDown from './MapsDropDown';

function NewGameMap() {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);

  return (
    <div className="NewGameMap_container relative flexdiv w-[98%]">
      <div className="w-full absolute top-[-1rem] right-[-0.4rem]">
        {/* {isDropDownActive ? ( */}
        <MapsDropDown toggleDropDown={toggleDropDown} />
        {/* ) : ( */}
        <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />
        {/* )} */}
      </div>
    </div>
  );
}

export default NewGameMap;
