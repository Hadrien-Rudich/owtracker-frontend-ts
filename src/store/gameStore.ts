import { create } from 'zustand';
import type { GameStore, GameData } from '../types/store/gameTypes';

export const gameStore = create<GameStore>()((set) => ({
  gamesData: [],
  addGamesData: (gamesObj) => set(() => ({ gamesData: gamesObj })),
  removeGamesData: () => {
    set(() => ({
      gamesData: [],
    }));
  },
  selectedGame: {} as GameData,
  addGame: (gameData) =>
    set((state) => ({
      gamesData: [...state.gamesData, gameData],
    })),
  deleteGame: (gameId: number) => {
    set((state) => ({
      gamesData: state.gamesData.filter((g: GameData) => g.id !== gameId),
    }));
  },

  selectGame: (gameObj: GameData) =>
    set(() => ({
      selectedGame: gameObj,
    })),
  unselectGame: () =>
    set(() => ({
      selectedGame: {} as GameData,
    })),
  isUpdatingGame: false,
  setIsUpdatingGame: (boolean: boolean) =>
    set(() => ({
      isUpdatingGame: boolean,
    })),
  currentGameResult: '',
  setCurrentGameResult: (result: string) =>
    set(() => ({
      currentGameResult: result,
    })),
  clearCurrentGameResult: () =>
    set(() => ({
      currentGameResult: '',
    })),
  currentGameDate: new Date(),
  setCurrentGameDate: (date: Date) =>
    set(() => ({
      currentGameDate: date,
    })),
  clearCurrentGameDate: () =>
    set(() => ({
      currentGameDate: new Date(),
    })),
  updatedGameResult: '',
  setUpdatedGameResult: (result: string) =>
    set(() => ({
      updatedGameResult: result,
    })),
  clearUpdatedGameResult: () =>
    set(() => ({
      updatedGameResult: '',
    })),
  updatedGameDate: '',
  setUpdatedGameDate: (date: string) =>
    set(() => ({
      updatedGameDate: date,
    })),
  clearUpdatedGameDate: () =>
    set(() => ({
      updatedGameDate: '',
    })),
  gameUpdateInProgress: false,
  setGameUpdateInProgress: (boolean: boolean) =>
    set(() => ({
      gameUpdateInProgress: boolean,
    })),
  currentMonth: 0,
  setCurrentMonth: (month) =>
    set(() => ({
      currentMonth: month,
    })),
  gameSavedToast: false,
  setGameSavedToast: (value: boolean) => set(() => ({ gameSavedToast: value })),
  reset: () => {
    set(() => ({
      gamesData: [],
      currentMonth: 0,
    }));
  },
}));

export default gameStore;
