import { ImCross } from 'react-icons/im';

interface ClearFiltersProps {
  clearFilteredArray: () => void;
}

function ClearFilters({ clearFilteredArray }: ClearFiltersProps) {
  const handleClearClick = () => {
    clearFilteredArray();
  };

  return (
    <div className="clearOptions_container flex justify-around  gap-2 absolute bottom-0 left-0 px-2 py-0.5">
      <button
        type="button"
        className="flexdiv gap-2 text-warning sign"
        onClick={handleClearClick}
      >
        <div className="flexdiv w-1/2">
          <p className="tracking-widest">Clear</p>
        </div>
        <div className="button_container flexdiv 1/2 relative ">
          <ImCross className="" />
        </div>
      </button>
    </div>
  );
}

export default ClearFilters;
