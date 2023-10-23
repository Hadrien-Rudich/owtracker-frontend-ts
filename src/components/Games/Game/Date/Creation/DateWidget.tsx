import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../../store/gameStore';
import { formatDateForGameEdit } from '../../../../../utils/utils';

function DateWidget({
  setIsDropDownActive,
}: {
  setIsDropDownActive: (value: boolean) => void;
}) {
  const { selectGameDate, selectGameDateInFormat, selectedGameDate } =
    gameStore();

  const [
    startDate,
    // setStartDate
  ] = useState(new Date());

  return (
    <div className="flexdiv relative">
      <DatePicker
        locale="en"
        dateFormat="dd/MM"
        selected={startDate === selectedGameDate ? startDate : selectedGameDate}
        onClickOutside={() => setIsDropDownActive(false)}
        onChange={(date) => date && selectGameDate(date)}
        onSelect={(date) => {
          selectGameDate(date);
          selectGameDateInFormat(formatDateForGameEdit(date));
        }}
        className="ring-2 w-full z-50 text-center hover:cursor-pointer focus:ring-fourthColor focus:outline-none"
        wrapperClassName="w-full"
      />
      <MdOutlineKeyboardArrowDown className="absolute w-4 h-4 top-[0.3rem] right-[-0.1rem] pointer-events-none" />
    </div>
  );
}

export default DateWidget;
