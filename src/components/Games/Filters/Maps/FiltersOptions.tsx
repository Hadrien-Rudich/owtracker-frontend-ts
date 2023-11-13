import { filterStore } from '../../../../store/filterStore';

function MapsFiltersOptions() {
  const { activeFilter, setActiveFilter } = filterStore();

  const handleMapsTypesClick = () => {
    if (activeFilter === 'mapTypes') {
      setActiveFilter('');
    } else {
      setActiveFilter('mapTypes');
    }
  };

  const handleMapsClick = () => {
    if (activeFilter === 'maps') {
      setActiveFilter('');
    } else {
      setActiveFilter('maps');
    }
  };
  return (
    <div className="MapsFiltersOptions_container flex justify-end">
      <div className="w-3/4 divide-y-[0.01rem] divide-ringColor border-l-[0.1rem] border-t-[0.1rem] border-ringColor bg-fifthColor">
        <div
          className={`${
            activeFilter === 'mapsTypes'
              ? 'bg-activeColor'
              : 'hover:bg-activeColor '
          }
   
      option_container w h-10 flex items-center justify-end `}
        >
          <button
            type="button"
            className="flex justify-start w-3/4"
            onClick={handleMapsTypesClick}
          >
            <p className="sm:text-base text-sm tracking-widest ">Map Types</p>
          </button>
        </div>

        <div
          className={`${
            activeFilter === 'maps' ? 'bg-activeColor' : 'hover:bg-activeColor '
          }
   
      option_container w h-10 flex items-center justify-end `}
        >
          <button
            type="button"
            className="flex justify-start w-3/4"
            onClick={handleMapsClick}
          >
            <p className="sm:text-base text-sm tracking-widest ">Maps</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MapsFiltersOptions;
