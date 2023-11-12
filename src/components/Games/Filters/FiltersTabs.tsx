import HeroesTab from './Heroes/HeroesTab';
import ResultsTab from './Results/ResultsTab';
import MapTab from './Maps/MapsTab';
import DateTab from './Dates/DateTab';
import ActiveFilter from './ActiveFilter';

function FiltersTabs() {
  return (
    <div className="FilterOptions_container flex sm:w-1/2 w-full z-20 bg-activeColor absolute top-0 left-0 ring-2 shadow-md rounded-sm">
      <ul className="tabs_container flex flex-col lg:w-[25%] sm:w-[40%] w-[25%]  border-r-2 divide-y-2 divide-ringColor border-ringColor">
        <li className="">
          <MapTab />
        </li>
        <li className="">
          <HeroesTab />
        </li>
        <li className="">
          <ResultsTab />
        </li>
        <li className="">
          <DateTab />
        </li>
      </ul>
      <div className="flex justify-start items-center lg:w-[75%] sm:w-[60%] w-[75%]">
        <div className="bg-thirdColor w-1/4 ">
          <ActiveFilter />
        </div>
      </div>
    </div>
  );
}

export default FiltersTabs;
