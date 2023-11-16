import SubTab from '../SubTab.tsx';
import filterStore from '../../../../store/filterStore.ts';
function MapsTab() {
  const { filteredMaps } = filterStore();
  return (
    <SubTab
      activeFilterProp="maps"
      tabName="Maps"
      filteredArray={filteredMaps}
    />
  );
}

export default MapsTab;
