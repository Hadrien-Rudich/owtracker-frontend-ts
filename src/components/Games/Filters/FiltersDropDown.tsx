import HeroesFilters from './Heroes/HeroesFilters';
import ResultFilters from './Results/ResultFilters';
import MapFilters from './Maps/MapFilters';
import DateFilters from './Dates/DateFilters';

function FiltersDropDown() {
  return (
    <div className="FilterOptions_container flexdiv w-1/2 py-4 z-50 bg-activeColor absolute top-0 left-0 ring-2 shadow-md rounded-sm">
      <ul className="flex justify-around w-full ">
        <li className="w-[25%]">
          <MapFilters />
        </li>
        <li className="w-[25%]">
          <HeroesFilters />
        </li>
        <li className="w-[10%]">
          <ResultFilters />
        </li>
        <li className="w-[15%]">
          <DateFilters />
        </li>
      </ul>
    </div>
  );
}

export default FiltersDropDown;
