import FilterTab from './Headers/Filters';
import ClearFilterTab from './Headers/ClearFilters';

function Filters() {
  return (
    <div className="filters_container w-full">
      <div className="lg:w-[12.5%] sm:w-[20%] w-[25%] flex ring-2 ring-fourthColor  divide-x-2 divide-fourthColor absolute top-[-2.15rem] left-[0rem] shadow-md rounded-sm">
        <div className="w-1/2">
          <FilterTab />
        </div>
        <div className="w-1/2">
          <ClearFilterTab />
        </div>
      </div>
    </div>
  );
}

export default Filters;
