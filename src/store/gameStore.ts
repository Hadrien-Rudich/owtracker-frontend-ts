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
  currentMonth: 0,
  setCurrentMonth: (month) =>
    set(() => ({
      currentMonth: month,
    })),
  reset: () => {
    set(() => ({
      gamesData: [],
      currentMonth: 0,
    }));
  },
}));

export default gameStore;
