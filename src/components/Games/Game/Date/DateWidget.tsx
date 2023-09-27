import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import type { GameData } from '../../../../types/store/gameTypes';
import {
  reverseDateFormat,
  convertDateToDatePickerFormat,
} from '../../../../utils/utils';

function DateWidget({
  setIsDropDownActive,
  setNewDate,
  gameObj,
}: {
  setIsDropDownActive: (value: boolean) => void;
  setNewDate: (value: string) => void;
  gameObj: GameData;
}) {
  const [startDate, setStartDate] = useState(
    convertDateToDatePickerFormat(gameObj.date)
  );
  return (
    <div className="flexdiv relative">
      <DatePicker
        locale="en"
        dateFormat="dd/MM"
        selected={startDate}
        onClickOutside={() => setIsDropDownActive(false)}
        onChange={(date) => date && setStartDate(date)}
        onSelect={(date) => {
          setNewDate(
            reverseDateFormat(date.toISOString().slice(5, 10).replace('-', '/'))
          );
        }}
        className="ring-2 w-full z-50 text-center hover:cursor-pointer"
        wrapperClassName="w-full"
      />
      <MdOutlineKeyboardArrowDown className="absolute w-4 h-4 top-[0.3rem] right-[-0.1rem] pointer-events-none" />
    </div>
  );
}

export default DateWidget;
