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

  updateSelectedGame: (updatedProperties: Partial<GameData>) =>
    set((state) => ({
      selectedGame: {
        ...state.selectedGame,
        ...updatedProperties,
      },
    })),
  updateGame: (gameId: number, updatedGameObj: GameData) =>
    set((state) => ({
      gamesData: state.gamesData.map((game: GameData) => {
        if (game.id === gameId) {
          return updatedGameObj;
        }
        return game;
      }),
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

  currentGameMap: '',
  setCurrentGameMap: (map: string) =>
    set(() => ({
      currentGameMap: map,
    })),
  clearCurrentGameMap: () =>
    set(() => ({
      currentGameMap: '',
    })),

  selectedGameMap: '',
  selectedGameMapImage: '',
  selectGameMap: (map: string, mapImage: string) =>
    set(() => ({
      selectedGameMap: map,
      selectedGameMapImage: mapImage,
    })),
  clearSelectedGameMap: () =>
    set(() => ({
      selectedGameMap: '',
      selectedGameMapImage: '',
    })),

  currentGameHeroes: [],
  setCurrentGameHeroes: (heroes: string[]) =>
    set(() => ({
      currentGameHeroes: heroes,
    })),
  clearCurrentGameHeroes: () =>
    set(() => ({
      currentGameHeroes: [],
    })),

  selectedGameHeroes: [],
  selectedGameHeroesImages: [],

  selectGameHero: (hero, heroImage) =>
    set((state) => ({
      selectedGameHeroes: [...state.selectedGameHeroes, hero],
      selectedGameHeroesImages: [...state.selectedGameHeroesImages, heroImage],
    })),

  unselectGameHero: (hero) => {
    set((state) => ({
      selectedGameHeroes: state.selectedGameHeroes.filter((h) => h !== hero),
      selectedGameHeroesImages: state.selectedGameHeroesImages.filter(
        (h) => h !== hero
      ),
    }));
  },
  clearSelectedGameHeroes: () =>
    set(() => ({
      selectedGameHeroes: [],
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

  selectedGameResult: '',
  selectGameResult: (result: string) =>
    set(() => ({
      selectedGameResult: result,
    })),
  clearSelectedGameResult: () =>
    set(() => ({
      selectedGameResult: '',
    })),

  selectedGameDate: new Date(),
  selectGameDate: (date: Date) =>
    set(() => ({
      selectedGameDate: date,
    })),
  clearSelectedGameDate: () =>
    set(() => ({
      selectedGameDate: new Date(),
    })),

  selectedGameDateInFormat: '',
  selectGameDateInFormat: (date: string) =>
    set(() => ({
      selectedGameDateInFormat: date,
    })),
  clearSelectedGameDateInFormat: () =>
    set(() => ({
      selectedGameDateInFormat: '',
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
