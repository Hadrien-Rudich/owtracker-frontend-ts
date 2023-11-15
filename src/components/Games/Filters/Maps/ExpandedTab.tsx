import filterStore from '../../../../store/filterStore';
import SubTab from '../SubTab';

function ExpandedTab() {
  const { activeFilter, filteredMapTypes, filteredMaps } = filterStore();

  return (
    <div className="HeroesFiltersOptions_container flex justify-end">
      <div className="w-3/4 divide-y-[0.01rem] divide-ringColor border-l-[0.1rem] border-t-[0.1rem] border-ringColor bg-fifthColor">
        <div
          className={`subTab_container ${
            activeFilter === 'mapTypes'
              ? 'bg-activeColor'
              : 'hover:bg-activeColor '
          }`}
        >
          <SubTab
            tabName="Types"
            activeFilterProp="mapTypes"
            filteredArray={filteredMapTypes}
          />
        </div>
        <div
          className={`subTab_container ${
            activeFilter === 'maps' ? 'bg-activeColor' : 'hover:bg-activeColor '
          }`}
        >
          <SubTab
            tabName="Maps"
            activeFilterProp="maps"
            filteredArray={filteredMaps}
          />
        </div>
      </div>
    </div>
  );
}

export default ExpandedTab;
