import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import HeroesDropDown from './HeroesDropDown';
import Heroes from '../Heroes';
import ErrorToast from '../../../../ErrorToast';
import { gameStore } from '../../../../../store/gameStore';
import { gameDataStore } from '../../../../../store/gameDataStore';

function NewGameHeroes() {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const { heroesData } = gameDataStore();
  const {
    selectedGameHeroes,
    heroesErrorToast,
    heroesErrorToastMessage,
    setHeroesErrorToast,
  } = gameStore();

  const toggleDropDown = () => {
    setHeroesErrorToast(false);
    setIsDropDownActive(!isDropDownActive);
  };

  return (
    <div className="NewGameHeroes_container relative flexdiv w-[85%]">
      {heroesErrorToast && (
        <ErrorToast
          toastText={heroesErrorToastMessage}
          booleanProp={heroesErrorToast}
          topProp="top-[-4.5rem]"
          leftProp="right-[7.15rem]"
        />
      )}
      <div className="w-full absolute top-[-1rem] right-[-0.4rem]  bg-activeColor">
        {isDropDownActive ? (
          <HeroesDropDown toggleDropDown={toggleDropDown} />
        ) : (
          <div className="heroesImages_container flexdiv ">
            {selectedGameHeroes.length > 0 ? (
              <button
                className="w-full relative ring-2 flexdiv"
                type="button"
                onClick={toggleDropDown}
              >
                {heroesData
                  .filter((hero) => selectedGameHeroes.includes(hero.slug))
                  .map((heroObj) => (
                    <div key={heroObj.label}>
                      <Heroes heroObj={heroObj} imgHeight="h-8" />
                    </div>
                  ))}
              </button>
            ) : (
              <button
                className="w-full relative ring-2 flexdiv h-8"
                type="button"
                onClick={toggleDropDown}
              >
                <div className="map_container flexdiv ">
                  <div className="flexdiv">
                    <p className="text-xl tracking-wider">HEROES</p>
                  </div>
                </div>
              </button>
            )}
            <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewGameHeroes;
