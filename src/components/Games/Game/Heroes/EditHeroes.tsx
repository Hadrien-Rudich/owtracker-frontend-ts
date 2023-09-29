import { useState } from 'react';
import { gameStore } from '../../../../store/gameStore';
import type { GameData } from '../../../../types/store/gameTypes';
import Heroes from './Heroes';

function EditHeroes({ gameObj }: { gameObj: GameData }) {
  const { selectedGame, selectedGameHeroes, selectGameHero } = gameStore();

  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [currentHeroes, setCurrentHeroes] = useState(gameObj.heroes);

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);
  const selectHeroes = (heroes: string[]) => {
    // selectGameHero(heroes);
    setCurrentHeroes(heroes);
    setIsDropDownActive(false);
  };

  if (selectedGame.id !== gameObj.id) {
    return <Heroes gameObj={gameObj} />;
  }

  return <div>Edit Heroes</div>;
}

export default EditHeroes;
