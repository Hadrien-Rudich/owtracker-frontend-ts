import { useState } from 'react';
import { filterStore } from '../../../store/filterStore';
import ResultsFilters from './Results/ResultsFilters';
import HeroesFilters from './Heroes/Heroes/HeroesFilters';
import MapsFilters from './Maps/Maps/MapsFilters';
import MapTypesFilters from './Maps/MapTypes/MapTypesFilters';
import HeroRolesFilters from './Heroes/HeroRoles/HeroRolesFilters';
import DatesFilters from './Dates/DatesFilters';
import CombinedFilters from './Maps/Combined/CombinedFilters';

function ActiveFilterDetails() {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const { activeFilter } = filterStore();

  const handleDropDown = () => {
    setIsDropDownActive(!isDropDownActive);
  };

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
      case 'combined':
        return <CombinedFilters />;
      case 'dates':
        return <DatesFilters />;
      default:
        return null;
    }
  };
  return activeTabComponent();
}

export default ActiveFilterDetails;
