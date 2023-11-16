import SubTab from '../SubTab.tsx';
import filterStore from '../../../../store/filterStore.ts';
function HeroesTab() {
  const { filteredHeroes } = filterStore();
  return (
    <SubTab
      activeFilterProp="heroes"
      tabName="Heroes"
      filteredArray={filteredHeroes}
    />
  );
}

export default HeroesTab;
