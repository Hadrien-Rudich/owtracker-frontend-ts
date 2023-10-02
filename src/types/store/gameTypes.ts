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
  updateGame: (gameId: number, updatedGameObj: GameData) => void;
  updateSelectedGame: (updatedProperties: Partial<GameData>) => void;
  deleteGame: (gameId: number) => void;
  selectGame: (game: GameData) => void;
  unselectGame: () => void;
  isUpdatingGame: boolean;
  setIsUpdatingGame: (boolean: boolean) => void;
  currentGameMap: string;
  setCurrentGameMap: (map: string) => void;
  clearCurrentGameMap: () => void;
  selectedGameMap: string;
  selectedGameMapImage: string;
  selectGameMap: (map: string, mapImage: string) => void;
  clearSelectedGameMap: () => void;
  currentGameHeroes: string[];
  setCurrentGameHeroes: (heroes: string[]) => void;
  clearCurrentGameHeroes: () => void;
  selectedGameHeroes: string[];
  selectGameHero: (hero: string) => void;
  unselectGameHero: (hero: string) => void;
  clearSelectedGameHeroes: () => void;
  currentGameResult: string;
  setCurrentGameResult: (result: string) => void;
  clearCurrentGameResult: () => void;
  selectedGameDate: Date;
  selectGameDate: (date: Date) => void;
  clearSelectedGameDate: () => void;
  selectedGameResult: string;
  selectGameResult: (result: string) => void;
  clearSelectedGameResult: () => void;
  selectedGameDateInFormat: string;
  selectGameDateInFormat: (date: string) => void;
  clearSelectedGameDateInFormat: () => void;
  gameUpdateInProgress: boolean;
  setGameUpdateInProgress: (boolean: boolean) => void;
  currentMonth: number;
  setCurrentMonth: (month: number) => void;
  gameSavedToast: boolean;
  setGameSavedToast: (value: boolean) => void;
  reset: () => void;
}

export type { GameData, GameStore };
