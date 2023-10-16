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
  resetSelectedGame: (originalGameObj: GameData) =>
    set(() => ({
      selectedGame: originalGameObj,
    })),
  isUpdatingGame: false,
  isCreatingGame: false,
  setIsUpdatingGame: (boolean: boolean) =>
    set(() => ({
      isUpdatingGame: boolean,
    })),
  setIsCreatingGame: (boolean: boolean) =>
    set(() => ({
      isCreatingGame: boolean,
    })),

  selectedGameMap: '',
  selectedGameMapImage: '',
  selectedGameMapType: '',
  selectGameMap: (map: string, mapImage: string) =>
    set(() => ({
      selectedGameMap: map,
      selectedGameMapImage: mapImage,
    })),
  selectGameMapType: (mapType: string) =>
    set(() => ({
      selectedGameMapType: mapType,
    })),
  clearSelectedGameMapType: () =>
    set(() => ({
      selectedGameMapType: '',
    })),

  selectedGameHeroes: [],
  selectedGameHeroesImages: [],

  selectGameHeroes: (heroes, heroesImages) =>
    set(() => ({
      selectedGameHeroes: heroes,
      selectedGameHeroesImages: heroesImages,
    })),

  selectGameHero: (hero, heroImage) =>
    set((state) => ({
      selectedGameHeroes: [...state.selectedGameHeroes, hero],
      selectedGameHeroesImages: [...state.selectedGameHeroesImages, heroImage],
    })),

  unselectGameHero: (hero, heroImage) => {
    set((state) => ({
      selectedGameHeroes: state.selectedGameHeroes.filter((h) => h !== hero),
      selectedGameHeroesImages: state.selectedGameHeroesImages.filter(
        (hImg) => hImg !== heroImage
      ),
    }));
  },

  selectedGameResult: '',
  selectedGameCurrentResult: '',
  selectGameResult: (result: string) =>
    set(() => ({
      selectedGameResult: result,
    })),
  selectGameCurrentResult: (result: string) =>
    set(() => ({
      selectedGameResult: result,
    })),

  selectedGameDate: new Date(),
  selectGameDate: (date: Date) =>
    set(() => ({
      selectedGameDate: date,
    })),

  selectedGameDateInFormat: '',
  selectGameDateInFormat: (date: string) =>
    set(() => ({
      selectedGameDateInFormat: date,
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
