interface GameData {
  id: number;
  userId: number;
  profileId: number;
  result: string;
  map: string;
  mapType: string;
  mapImageUrl: string;
  heroes: string[];
  heroesImageUrl: string[];
  date: string;
}

interface GameStore {
  gamesData: GameData[] | [];
  addGamesData: (games: GameData[]) => void;
  removeGamesData: () => void;
  gameData: GameData;
  addGameData: (game: GameData) => void;
  currentMonth: number;
  setCurrentMonth: (month: number) => void;
  reset: () => void;
}

export type { GameData, GameStore };
