import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../store/gameStore';
import type { GameData } from '../../../../types/store/gameTypes';
import {
  formatDateForGameEdit,
  convertDateToDatePickerFormat,
} from '../../../../utils/utils';

function DateWidget({
  setIsDropDownActive,
  gameObj,
}: {
  setIsDropDownActive: (value: boolean) => void;
  gameObj: GameData;
}) {
  const { currentGameDate, setCurrentGameDate, setUpdatedGameDate } =
    gameStore();
  const formattedDate = convertDateToDatePickerFormat(gameObj.date);

  // setCurrentGameDate(formattedDate);
  // setCurrentGameDate(formattedDate);
  // const [currentGameDate, setCurrentGameDate] = useState(
  //   convertDateToDatePickerFormat(gameObj.date)
  // );

  return (
    <div className="flexdiv relative">
      <DatePicker
        locale="en"
        dateFormat="dd/MM"
        selected={currentGameDate}
        onClickOutside={() => setIsDropDownActive(false)}
        onChange={(date) => date && setCurrentGameDate(date)}
        onSelect={(date) => {
          setUpdatedGameDate(formatDateForGameEdit(date));
        }}
        className="ring-2 w-full z-50 text-center hover:cursor-pointer"
        wrapperClassName="w-full"
      />
      <MdOutlineKeyboardArrowDown className="absolute w-4 h-4 top-[0.3rem] right-[-0.1rem] pointer-events-none" />
    </div>
  );
}

export default DateWidget;
