import { filterStore } from '../../../store/filterStore';
import ResultsFilters from './Results/ResultsFilters';
import HeroesFilters from './Heroes/Heroes/HeroesFilters';
import MapsFilters from './Maps/Maps/MapsFilters';
import MapTypesFilters from './Maps/MapTypes/MapTypesFilters';
import HeroRolesFilters from './Heroes/HeroRoles/HeroRolesFilters';
import DatesFilters from './Dates/DatesFilters';

function ActiveFilterDetails() {
  const { activeFilter } = filterStore();

  const activeTabComponent = () => {
    switch (activeFilter) {
      case 'results':
        return <ResultsFilters />;
      case 'heroes':
        return <HeroesFilters />;
      case 'heroRoles':
        return <HeroRolesFilters />;
      case 'maps':
        return <MapsFilters />;
      case 'mapTypes':
        return <MapTypesFilters />;
      case 'dates':
        return <DatesFilters />;
      default:
        return null;
    }
  };
  return activeTabComponent();
}

export default ActiveFilterDetails;
