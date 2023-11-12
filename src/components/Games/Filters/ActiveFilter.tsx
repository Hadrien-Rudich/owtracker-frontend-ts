import { filterStore } from '../../../store/filterStore';
import ResultsFilters from './Results/ResultsFilters';

function FilterPage() {
  const { activeFilter: activeTab } = filterStore();
  return <div>{activeTab === 'results' && <ResultsFilters />}</div>;
}

export default FilterPage;
