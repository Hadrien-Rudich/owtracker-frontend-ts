import { create } from 'zustand';
import type { GameStore, GameData } from '../types/store/gameTypes';

export const gameStore = create<GameStore>()((set) => ({
  gamesData: [],
  addGamesData: (games) => set(() => ({ gamesData: games })),
  removeGamesData: () => {
    set(() => ({
      gamesData: [],
    }));
  },
  gameData: {} as GameData,
  addGameData: (gameData) =>
    set((state) => ({
      gamesData: [...state.gamesData, gameData],
    })),
  deleteGameData: (gameId: number) => {
    set((state) => ({
      gamesData: state.gamesData.filter((g: GameData) => g.id !== gameId),
    }));
  },
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
