import { gameDataStore } from '../../../../../store/gameDataStore';
import { filterStore } from '../../../../../store/filterStore';
import ClearFilters from '../../ClearFilters';

function HeroRolesFilters() {
  const { rolesData } = gameDataStore();
  const {
    activeFilter,
    filterHeroRole,
    unfilterHeroRole,
    filteredHeroRoles,
    clearFilteredHeroRole,
  } = filterStore();

  const handleHeroRoleClick = (heroRole: string) => {
    if (filteredHeroRoles.includes(heroRole)) {
      unfilterHeroRole(heroRole);
    } else {
      filterHeroRole(heroRole);
    }
  };

  return (
    <div className="heroRoles_container h-full  bg-mainColor flexdiv col gap-4 justify-center w-[12rem] border-l-[0.125rem] border-ringColor">
      {rolesData.map((role) => (
        <div className="heroRole_container" key={role.id}>
          <div className="flexdiv">
            <button
              type="button"
              value={role.label}
              className={`${
                filteredHeroRoles.includes(role.label)
                  ? 'active'
                  : 'inactiveMapType '
              }  
        filter flexdiv  gap-2 rounded-sm`}
              onClick={() => handleHeroRoleClick(role.label)}
            >
              <img
                className=" sm:h-6 sm:w-12 h-4 w-8 drop-shadow-md"
                src={`images/roles/${`${role.imageUrl}`}`}
                alt="map type icon"
              />
            </button>
          </div>
        </div>
      ))}
      {activeFilter === 'heroRoles' && filteredHeroRoles.length > 0 && (
        <ClearFilters clearFilteredArray={clearFilteredHeroRole} />
      )}
    </div>
  );
}

export default HeroRolesFilters;
