import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../../store/gameStore';
// import type { GameData } from '../../../../../types/store/gameTypes';
import Heroes from '../Heroes';
import { gameDataStore } from '../../../../../store/gameDataStore';

interface HeroesDropDownProps {
  toggleDropDown: () => void;
}

function HeroesDropDown({ toggleDropDown }: HeroesDropDownProps) {
  const { selectedGameHeroes, selectGameHero, unselectGameHero } = gameStore();

  const { rolesData, heroesData } = gameDataStore();

  const selectHero = (hero: string, heroImage: string) => {
    const heroInList = selectedGameHeroes.includes(hero);
    if (!heroInList) {
      selectGameHero(hero, heroImage);
    } else {
      if (selectedGameHeroes.length === 1) return;

      unselectGameHero(hero, heroImage);
    }
  };

  return (
    <div className="heroesImages_container ring-2 ring-fourthColor bg-activeColor">
      <button
        className="w-full relative h-12"
        type="button"
        onClick={toggleDropDown}
      >
        <div className="currentHeroes_container flexdiv">
          {heroesData
            .filter((hero) => selectedGameHeroes.includes(hero.slug))
            .map((heroObj) => (
              <Heroes
                key={(heroObj.id, heroObj.label)}
                heroObj={heroObj}
                imgHeight="h-8"
              />
            ))}
        </div>
      </button>
      <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />

      <div className="heroesDropDown_container grid grid-cols-3 divide-x-2 divide-activeColor justify-center content-center bg-mainColor py-2">
        {rolesData.map((r) => (
          <div key={r.label} className="heroesByRoles_container">
            <div className="heroes_container flexdiv">
              <div className="flexdiv flex-wrap gap-1">
                {heroesData
                  .filter(
                    (hero) => hero.role.toLowerCase() === r.label.toLowerCase()
                  )
                  .map((h) => (
                    <div
                      className="heroes_container bg-activeColor rounded-sm h-9 hover:scale-110"
                      key={h.slug}
                    >
                      <button
                        type="button"
                        className="h-6"
                        onClick={() => selectHero(h.slug, h.imageUrl)}
                      >
                        <Heroes heroObj={h} imgHeight="h-9" />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroesDropDown;
