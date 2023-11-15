import HeroesTab from './Heroes/HeroesTab';
import MapsTab from './Maps/MapsTab';
import ResultsTab from './Results/ResultsTab';
import DatesTab from './Dates/DatesTab';
import ActiveFilterDetails from './ActiveFilterDetails';
import { filterStore } from '../../../store/filterStore';
function FiltersTabs() {
  const { expandedFilter, activeFilter } = filterStore();
  return (
    <div className="FilterOptions_container flex z-20  absolute top-0 left-0 ring-2 shadow-md rounded-sm bg-fifthColor">
      <ul className="tabs_container flex flex-col w-[12rem] divide-y-[0.125rem] divide-ringColor ">
        <li
          className={`${
            expandedFilter === 'maps'
              ? 'bg-activeColor'
              : ' hover:bg-activeColor'
          }`}
        >
          <MapsTab />
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
            activeFilter === 'results'
              ? 'bg-activeColor'
              : ' hover:bg-activeColor'
          }`}
        >
          <ResultsTab />
        </li>
        <li
          className={`${
            activeFilter === 'dates'
              ? 'bg-activeColor'
              : ' hover:bg-activeColor'
          }`}
        >
          <DatesTab />
        </li>
      </ul>
      <div className="relative">
        <ActiveFilterDetails />
      </div>
    </div>
  );
}

export default FiltersTabs;
