import { filterStore } from '../../../store/filterStore';
import ResultsFilters from './Results/ResultsFilters';
import HeroesFilters from './Heroes/HeroesFilters';

function FilterPage() {
  const { activeFilter: activeTab } = filterStore();

  const activeTabComponent = () => {
    switch (activeTab) {
      case 'results':
        return <ResultsFilters />;
      case 'heroes':
        return <HeroesFilters />;
      default:
        return null;
    }
  };
  return activeTabComponent();
}

export default FilterPage;
