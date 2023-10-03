import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gameStore } from '../../../../store/gameStore';
import type { GameData } from '../../../../types/store/gameTypes';
import Heroes from './Heroes';
import { gameReportStore } from '../../../../store/gameReportStore';

function EditHeroes({ gameObj }: { gameObj: GameData }) {
  const {
    selectedGame,
    selectedGameHeroes,
    selectGameHero,
    updateSelectedGame,
  } = gameStore();

  const { heroesData } = gameReportStore();

  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [currentGame, setCurrentGame] = useState(gameObj);

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);
  const selectHeroes = (hero: string, heroImage: string) => {
    selectGameHero(hero, heroImage);
    updateSelectedGame({
      ...selectedGame,
      heroes: [...selectedGameHeroes, hero],
      heroesImageUrl: [...selectedGame.heroesImageUrl, heroImage],
    });
    setCurrentGame({
      ...selectedGame,
      heroes: [...selectedGameHeroes, hero],
      heroesImageUrl: [...selectedGame.heroesImageUrl, heroImage],
    });
    setIsDropDownActive(false);
  };

  if (selectedGame.id !== gameObj.id) {
    return <Heroes gameObj={gameObj} imgHeight="h-10" />;
  }
  return (
    <div className="EditMap_container relative flexdiv w-[85%] bg-sixthColor">
      <div className="w-full absolute top-[-1.1rem] right-[-0.4rem]">
        {isDropDownActive ? (
          <div className="heroesImages_container ring-2 bg-fourthColor">
            <button
              className="w-full relative"
              type="button"
              onClick={toggleDropDown}
            >
              <div className="currentHeroes_container flexdiv">
                <Heroes gameObj={currentGame} imgHeight="h-9" />
              </div>
            </button>
            <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />

            <div
              className="heroesDropDown_container grid grid-cols-10
"
            >
              {heroesData.map((hero) => (
                <div className="map_container" key={hero.label}>
                  <button
                    type="button"
                    className="w-full h-6"
                    onClick={() => selectHeroes(hero.label, hero.imageUrl)}
                  >
                    <Heroes heroObj={hero} imgHeight="h-12" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="heroesimages_container flexdiv bg-fourthColor">
            {selectedGameHeroes === selectedGame.heroes ? (
              <button
                className="w-full relative ring-2 "
                type="button"
                onClick={toggleDropDown}
              >
                <Heroes gameObj={selectedGame} imgHeight="h-9" />
              </button>
            ) : (
              <button
                className="w-full relative ring-2 flexdiv bg-thirdColor"
                type="button"
                onClick={toggleDropDown}
              >
                <Heroes gameObj={selectedGame} imgHeight="h-9" />
              </button>
            )}
            <MdOutlineKeyboardArrowDown className="absolute h-8 w-8 top-0 right-0 pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
}

export default EditHeroes;
