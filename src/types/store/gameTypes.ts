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
  currentGameResult: string;
  setCurrentGameResult: (result: string) => void;
  clearCurrentGameResult: () => void;
  currentGameDate: Date;
  setCurrentGameDate: (date: Date) => void;
  clearCurrentGameDate: () => void;
  updatedGameResult: string;
  setUpdatedGameResult: (result: string) => void;
  clearUpdatedGameResult: () => void;
  updatedGameDate: string;
  setUpdatedGameDate: (date: string) => void;
  clearUpdatedGameDate: () => void;
  gameUpdateInProgress: boolean;
  setGameUpdateInProgress: (boolean: boolean) => void;
  currentMonth: number;
  setCurrentMonth: (month: number) => void;
  gameSavedToast: boolean;
  setGameSavedToast: (value: boolean) => void;
  reset: () => void;
}

export type { GameData, GameStore };
