import { filterStore } from '../../../store/filterStore';
import ResultsFilters from './Results/ResultsFilters';
import HeroesFilters from './Heroes/HeroesFilters';
import MapsFilters from './Maps/Maps/MapsFilters';
import MapTypesFilters from './Maps/MapTypes/MapTypesFilters';

function FilterPage() {
  const { activeFilter } = filterStore();

  const activeTabComponent = () => {
    switch (activeFilter) {
      case 'results':
        return <ResultsFilters />;
      case 'heroes':
        return <HeroesFilters />;
      case 'maps':
        return <MapsFilters />;
      case 'mapTypes':
        return <MapTypesFilters />;
      case 'date':
        return <HeroesFilters />;
      default:
        return null;
    }
  };
  return activeTabComponent();
}

export default FilterPage;
