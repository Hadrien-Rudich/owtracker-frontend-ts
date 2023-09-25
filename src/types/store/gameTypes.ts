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
  selectedGame: GameData;
  addGame: (game: GameData) => void;
  deleteGame: (gameId: number) => void;
  selectGame: (game: GameData) => void;
  unselectGame: () => void;
  isUpdatingGame: boolean;
  setIsUpdatingGame: (boolean: boolean) => void;
  currentMonth: number;
  setCurrentMonth: (month: number) => void;
  newGameSubmitted: boolean;
  toggleNewGameSubmitted: () => void;
  reset: () => void;
}

export type { GameData, GameStore };
