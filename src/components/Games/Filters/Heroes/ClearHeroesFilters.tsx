import { ImCross } from 'react-icons/im';
import { filterStore } from '../../../../store/filterStore';

function clearHeroesFilters() {
  const { clearFilteredHeroes } = filterStore();

  const handleClearClick = () => {
    clearFilteredHeroes();
  };

  return (
    <div className="clearOptions_container flex justify-around  gap-2 absolute bottom-0 left-0 bg-fifthColor px-2 py-1 ring-2 ring-warning">
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
