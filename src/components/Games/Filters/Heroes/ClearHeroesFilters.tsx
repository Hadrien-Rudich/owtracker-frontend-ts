import { ImCross } from 'react-icons/im';

interface FilterProps {
  tickedHeroesSetter: (value: string[]) => void;
}

function clearHeroesFilters({ tickedHeroesSetter }: FilterProps) {
  const handleClearClick = () => {
    tickedHeroesSetter([]);
  };

  return (
    <div className="clearOptions_container flex justify-around w-full gap-2">
      <div className="flexdiv w-1/2">
        <p className="tracking-widest">clear</p>
      </div>
      <div className="button_container flexdiv 1/2 relative ">
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

export default clearHeroesFilters;
