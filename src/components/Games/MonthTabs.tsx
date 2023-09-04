import { MouseEvent } from 'react';
import { gameStore } from '../../store/gameStore';
import { months } from '../../utils/utils';

function MonthTabs() {
  const { currentMonth, setCurrentMonth } = gameStore();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentMonth(Number(event.currentTarget.value));
  };

  return (
    <div className="monthTab_container">
      <div className="rounded-sm shadow-lg flex ">
        {months.map((month, index) => (
          <button
            key={month.index}
            value={month.index}
            onClick={handleClick}
            type="button"
            className={`${
              Number(currentMonth) === Number(month.index)
                ? `bg-thirdColor text-secondaryText scale-110 rounded-sm z-20 shadow-lg`
                : `bg-mainColor hover:bg-activeColor hover:shadow-lg opacity-60 hover:opacity-100 z-0`
            } w-1/12 h-8 tracking-widest
            ${index === 0 ? 'rounded-sm rounded-r-none' : ''} ${
              index === months.length - 1 ? 'rounded-sm rounded-l-none' : ''
            }`}
          >
            {month.label.substring(0, 3)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MonthTabs;