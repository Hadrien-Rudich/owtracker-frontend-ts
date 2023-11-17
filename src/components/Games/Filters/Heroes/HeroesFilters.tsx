import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { gameDataStore } from '../../../../store/gameDataStore';
import { filterStore } from '../../../../store/filterStore';
import Heroes from '../../Game/Heroes/Heroes';
import ClearFilters from '../ClearFilters';

function HeroesFilters() {
  const {
    activeFilter,
    clearFilteredHeroes,
    clearFilteredHeroRole,
    filteredHeroRoles,
    filterHeroRole,
    unfilterHeroRole,
    filteredHeroes,
    filterHero,
    unfilterHero,
  } = filterStore();
  const { heroesData, rolesData } = gameDataStore();

  const handleHeroRoleFilter = (heroRole: string) => {
    if (filteredHeroRoles.includes(heroRole)) {
      unfilterHeroRole(heroRole);
    } else {
      filterHeroRole(heroRole);
    }
  };

  const handleHeroFilter = (hero: string) => {
    if (filteredHeroes.includes(hero)) {
      unfilterHero(hero);
    } else {
      filterHero(hero);
    }
  };

  return (
    <div
      className="Combined_container w-[67.85rem]
     h-full bg-mainColor border-l-[0.125rem] border-ringColor"
    >
      <div className=" grid grid-cols-3">
        {rolesData.map((role) => (
          <div className="col_container col-span-1" key={(role.id, role.label)}>
            <div className="heroRole_container h-14 flexdiv" key={role.id}>
              <button
                className="flexdiv"
                type="button"
                value={role.label.toLowerCase()}
                onClick={() => handleHeroRoleFilter(role.label)}
              >
                <img
                  className="sm:h-8 sm:w-20 h-4 w-8 drop-shadow-md"
                  src={`images/roles/${`${role.imageUrl}`}`}
                  alt="hero role icon"
                />
                {!filteredHeroRoles.includes(role.label) ? (
                  <MdOutlineKeyboardArrowUp className="w-5 h-5" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="filteredHeroes_container flexdiv divide-y-2  divide-activeColor pb-[0.15rem]">
              {!filteredHeroRoles.includes(role.label) && (
                <div className="flexdiv flex-wrap w-2/3 gap-1">
                  {heroesData
                    .filter(
                      (hero) => hero.role === role.label.toLocaleLowerCase()
                    )
                    .map((h) => (
                      <div key={h.slug} className="hero_container h-9 relative">
                        <button
                          type="button"
                          className={`${
                            filteredHeroes.includes(h.slug)
                              ? 'ring-[0.1rem] ring-thirdColor'
                              : 'grayscale opacity-60 hover:scale-110 hover:grayscale-0 hover:opacity-100'
                          }    hero_button bg-activeColor w-full rounded-sm h-9 shadow-md`}
                          onClick={() => handleHeroFilter(h.slug)}
                        >
                          <Heroes heroObj={h} imgHeight="h-9" />
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>{' '}
      {activeFilter === 'heroes' && filteredHeroes.length > 0 && (
        <ClearFilters
          clearFilteredArray={clearFilteredHeroes}
          clearSecondFilteredArray={clearFilteredHeroRole}
        />
      )}
    </div>
  );
}

export default HeroesFilters;
