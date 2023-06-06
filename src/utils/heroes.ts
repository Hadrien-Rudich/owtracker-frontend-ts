import { GameReportStore } from '../types/store/gameReportTypes';

const toggleHero = (selectedHero: string, store: GameReportStore) => {
  const heroInList = store.heroes.includes(selectedHero);

  if (!heroInList) {
    store.addHero(selectedHero);
  } else {
    store.removeHero(selectedHero);
  }
};

export default toggleHero;
