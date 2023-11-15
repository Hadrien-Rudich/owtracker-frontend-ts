import { gameDataStore } from '../../../../../store/gameDataStore';
import { filterStore } from '../../../../../store/filterStore';
import Heroes from '../../../Game/Heroes/Heroes';
import ClearFilters from '../../ClearFilters';

function HeroesFilters() {
  const { heroesData, rolesData } = gameDataStore();
  const {
    activeFilter,
    filterHero,
    unfilterHero,
    filteredHeroes,
    clearFilteredHeroes,
  } = filterStore();

  const handleHeroClick = (hero: string) => {
    if (filteredHeroes.includes(hero)) {
      unfilterHero(hero);
    } else {
      filterHero(hero);
    }
  };

  return (
    <div className="HeroesFilters_container h-full border-l-[0.125rem] border-ringColor ">
      <div className="heroesDropDown_container grid grid-cols-3 divide-x-2 divide-activeColor  bg-mainColor h-full flexdiv w-[24rem]">
        {rolesData.map((r) => (
          <div key={r.label} className="heroesByRoles_container">
            <div className="heroes_container">
              <div className="flexdiv flex-wrap gap-1">
                {heroesData
                  .filter(
                    (hero) => hero.role.toLowerCase() === r.label.toLowerCase()
                  )
                  .map((h) => (
                    <div
                      className={`${
                        filteredHeroes.includes(h.slug)
                          ? 'ring-2 ring-thirdColor '
                          : 'hover:scale-110 '
                      }    hero_button bg-activeColor rounded-sm h-8 shadow-md`}
                      key={h.slug}
                    >
                      <button
                        type="button"
                        onClick={() => handleHeroClick(h.slug)}
                      >
                        <Heroes heroObj={h} imgHeight="h-8" />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {activeFilter === 'heroes' && filteredHeroes.length > 0 && (
        <ClearFilters clearFilteredArray={clearFilteredHeroes} />
      )}
    </div>
  );
}

export default HeroesFilters;
