import filterStore from '../../../../store/filterStore';
import SubTab from '../SubTab';

function ExpandedTab() {
  const { activeFilter, filteredHeroRoles, filteredHeroes } = filterStore();

  return (
    <div className="HeroesFiltersOptions_container flex justify-end">
      <div className="w-3/4 divide-y-[0.01rem] divide-ringColor border-l-[0.1rem] border-t-[0.1rem] border-ringColor bg-fifthColor">
        <div
          className={`subTab_container ${
            activeFilter === 'heroRoles'
              ? 'bg-activeColor'
              : 'hover:bg-activeColor '
          }`}
        >
          <SubTab
            tabName="Roles"
            activeFilterProp="heroRoles"
            filteredArray={filteredHeroRoles}
          />
        </div>
        <div
          className={`subTab_container ${
            activeFilter === 'heroes'
              ? 'bg-activeColor'
              : 'hover:bg-activeColor '
          }`}
        >
          <SubTab
            tabName="Heroes"
            activeFilterProp="heroes"
            filteredArray={filteredHeroes}
          />
        </div>
      </div>
    </div>
  );
}

export default ExpandedTab;
