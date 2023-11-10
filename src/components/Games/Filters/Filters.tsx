import FilterTab from './Tabs/FilterTab';
import ClearFilterTab from './Tabs/ClearFilterTab';

function Filters() {
  return (
    <div className="filters_container">
      <div className="flexdiv ring-2 ring-fourthColor  divide-x-2 divide-fourthColor absolute top-[-2.15rem] left-[0rem] z-30 shadow-md rounded-sm">
        <FilterTab /> <ClearFilterTab />
      </div>
    </div>
  );
}

export default Filters;
