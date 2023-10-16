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

  addGame: (game: GameData) => void;
  updateGame: (gameId: number, updatedGameObj: GameData) => void;
  updateSelectedGame: (updatedProperties: Partial<GameData>) => void;
  deleteGame: (gameId: number) => void;
  selectGame: (game: GameData) => void;
  resetSelectedGame: (originalGameObj: GameData) => void;
  unselectGame: () => void;

  setIsUpdatingGame: (boolean: boolean) => void;
  setIsCreatingGame: (boolean: boolean) => void;

  selectedGame: GameData;
  isUpdatingGame: boolean;
  isCreatingGame: boolean;
  selectedGameMap: string;
  selectedGameMapType: string;
  selectedGameMapImage: string;
  selectedGameDate: Date;
  selectedGameResult: string;
  selectedGameCurrentResult: string;
  selectedGameDateInFormat: string;
  selectedGameHeroes: string[];
  selectedGameHeroesImages: string[];

  gameUpdateInProgress: boolean;
  currentMonth: number;
  gameSavedToast: boolean;
  selectGameMap: (map: string, mapImage: string) => void;
  selectGameMapType: (mapType: string) => void;
  clearSelectedGameMapType: () => void;

  selectGameHero: (hero: string, heroImage: string) => void;
  selectGameHeroes: (heroes: string[], heroesImages: string[]) => void;
  unselectGameHero: (hero: string, heroImage: string) => void;

  selectGameDate: (date: Date) => void;

  selectGameResult: (result: string) => void;
  selectGameCurrentResult: (result: string) => void;

  selectGameDateInFormat: (date: string) => void;

  setGameUpdateInProgress: (boolean: boolean) => void;

  setCurrentMonth: (month: number) => void;

  setGameSavedToast: (value: boolean) => void;

  clearNewGame: () => void;
  reset: () => void;
}

export type { GameData, GameStore };
