import { filterStore } from '../../../../store/filterStore';

function HeroesFiltersOptions() {
  const { activeFilter, setActiveFilter } = filterStore();

  const handleHeroRolesClick = () => {
    if (activeFilter === 'heroRoles') {
      setActiveFilter('');
    } else {
      setActiveFilter('heroRoles');
    }
  };

  const handleHeroesclick = () => {
    if (activeFilter === 'heroes') {
      setActiveFilter('');
    } else {
      setActiveFilter('heroes');
    }
  };
  return (
    <div className="MapsFiltersOptions_container flex justify-end">
      <div className="w-3/4 divide-y-[0.01rem] divide-ringColor border-l-[0.1rem] border-t-[0.1rem] border-ringColor bg-fifthColor">
        <div
          className={`${
            activeFilter === 'heroRoles'
              ? 'bg-activeColor'
              : 'hover:bg-activeColor '
          }
   
      option_container w h-10 flex items-center justify-end `}
        >
          <button
            type="button"
            className="flex justify-start w-3/4"
            onClick={handleHeroRolesClick}
          >
            <p className="sm:text-base text-sm tracking-widest ">Hero Roles</p>
          </button>
        </div>

        <div
          className={`${
            activeFilter === 'heroes'
              ? 'bg-activeColor'
              : 'hover:bg-activeColor '
          }
   
      option_container w h-10 flex items-center justify-end `}
        >
          <button
            type="button"
            className="flex justify-start w-3/4"
            onClick={handleHeroesclick}
          >
            <p className="sm:text-base text-sm tracking-widest ">Heroes</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroesFiltersOptions;
