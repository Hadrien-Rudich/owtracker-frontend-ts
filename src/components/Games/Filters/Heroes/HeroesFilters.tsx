import { useState } from 'react';
import { gameDataStore } from '../../../../store/gameDataStore';
import Heroes from '../../Game/Heroes/Heroes';
import ClearHeroesFilters from './ClearHeroesFilters';
import { filterStore } from '../../../../store/filterStore';

function HeroesFilters() {
  const { heroesData } = gameDataStore();
  const { activeFilter } = filterStore();
  const [tickedHeroes, setTickedHeroes] = useState<string[]>([]);

  const handleHeroClick = (hero: string) => {
    if (tickedHeroes.includes(hero)) {
      setTickedHeroes(
        tickedHeroes.filter((existingHero) => existingHero !== hero)
      );
    } else {
      setTickedHeroes([...tickedHeroes, hero]);
    }
  };

  return (
    <div className="HeroesFilters_container  flexdiv col p-4">
      <ul className="heroes_container flexdiv flex-wrap gap-2">
        {heroesData.map((hero) => (
          <li className="h-7" key={hero.id}>
            <button
              type="button"
              className={`${
                tickedHeroes.includes(hero.label)
                  ? 'ring-2 ring-thirdColor scale-110 '
                  : 'hover:scale-110 '
              }          
              hero_button  rounded-sm  `}
              onClick={() => handleHeroClick(hero.label)}
            >
              <Heroes heroObj={hero} imgHeight="h-8" />
            </button>
          </li>
        ))}
      </ul>
      {activeFilter === 'heroes' && (
        <div className="clearFilter_container absolute bottom-[-1rem] left-[0.5rem]">
          {tickedHeroes.length > 0 && (
            <ClearHeroesFilters tickedHeroesSetter={setTickedHeroes} />
          )}
        </div>
      )}
    </div>
  );
}

export default HeroesFilters;
