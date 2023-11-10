import { ImCross } from 'react-icons/im';

interface FilterProps {
  winBooleanSetter: (value: boolean) => void;
  lossBooleanSetter: (value: boolean) => void;
  drawBooleanSetter: (value: boolean) => void;
}

function ClearResultFilters({
  winBooleanSetter,
  lossBooleanSetter,
  drawBooleanSetter,
}: FilterProps) {
  const handleClearClick = () => {
    winBooleanSetter(false);
    lossBooleanSetter(false);
    drawBooleanSetter(false);
  };

  return (
    <div className="clearOptions_container flex justify-around w-full">
      <div className="flexdiv w-1/2">
        <p className="tracking-widest">clear</p>
      </div>
      <div className="button_container flexdiv  w-1/2 relative ">
        <button
          type="button"
          className="text-warning"
          onClick={handleClearClick}
        >
          <ImCross className="sign" />
        </button>
      </div>
    </div>
  );
}

export default ClearResultFilters;
