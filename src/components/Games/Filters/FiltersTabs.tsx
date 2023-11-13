import HeroesTab from './Heroes/HeroesTab';
import ResultsTab from './Results/ResultsTab';
import MapTab from './Maps/Tab';
import DateTab from './Dates/DateTab';
import ActiveFilter from './ActiveFilter';
import { filterStore } from '../../../store/filterStore';

function FiltersTabs() {
  const { expandedFilter } = filterStore();
  return (
    <div className="FilterOptions_container flex xl:w-1/2 w-full z-20  absolute top-0 left-0 ring-2 shadow-md rounded-sm bg-fifthColor">
      <ul className="tabs_container flex flex-col lg:w-[25%] sm:w-[40%] w-[25%]  border-r-2 divide-y-2 divide-ringColor border-ringColor">
        <li
          className={`${
            expandedFilter === 'maps'
              ? 'bg-activeColor'
              : ' hover:bg-activeColor'
          }`}
        >
          <MapTab />
        </li>

        <li
          className={`${
            expandedFilter === 'heroes'
              ? 'bg-activeColor'
              : ' hover:bg-activeColor'
          }`}
        >
          <HeroesTab />
        </li>
        <li
          className={`${
            expandedFilter === 'results'
              ? 'bg-activeColor'
              : ' hover:bg-activeColor'
          }`}
        >
          <ResultsTab />
        </li>
        <li
          className={`${
            expandedFilter === 'date'
              ? 'bg-activeColor'
              : ' hover:bg-activeColor'
          }`}
        >
          <DateTab />
        </li>
      </ul>
      <div className="relative lg:w-[75%] sm:w-[60%] w-[75%]">
        <ActiveFilter />
      </div>
    </div>
  );
}

export default FiltersTabs;
