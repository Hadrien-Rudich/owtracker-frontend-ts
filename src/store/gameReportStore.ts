import { create } from 'zustand';
import type { GameReportStore } from '../types/store/gameReportTypes';

export const gameReportStore = create<GameReportStore>()((set) => ({
  heroesData: [],
  addHeroesData: (heroes) => set(() => ({ heroesData: heroes })),
  heroes: [],
  addHero: (hero) => set((state) => ({ heroes: [...state.heroes, hero] })),
  removeHero: (hero) => {
    set((state) => ({
      heroes: state.heroes.filter((h) => h !== hero),
    }));
  },
  clearHeroes: () => set(() => ({ heroes: [] })),
  heroesImageUrl: [],
  addHeroImageUrl: (heroImageUrl) =>
    set((state) => ({
      heroesImageUrl: [...state.heroesImageUrl, heroImageUrl],
    })),
  removeHeroImageUrl: (heroImageUrl) => {
    set((state) => ({
      heroesImageUrl: state.heroesImageUrl.filter((u) => u !== heroImageUrl),
    }));
  },
  mapsData: [],
  addMapsData: (maps) => set(() => ({ mapsData: maps })),
  map: '',
  addMap: (map) => set(() => ({ map })),
  mapTypesData: [],
  addMapTypesData: (types) => set(() => ({ mapTypesData: types })),
  mapType: '',
  addMapType: (mapType) => set(() => ({ mapType })),
  clearMapType: () => set(() => ({ mapType: '' })),
  clearMap: () => set(() => ({ map: '' })),
  mapImageUrl: '',
  addMapImageUrl: (mapImageUrl) => set(() => ({ mapImageUrl })),
  clearMapImageUrl: () => set(() => ({ mapImageUrl: '' })),
  result: '',
  addResult: (result) => set(() => ({ result })),
  clearResult: () => set(() => ({ result: '' })),
  rolesData: [],
  addRolesData: (roles) => set(() => ({ rolesData: roles })),
  role: '',
  addRole: (role) => set(() => ({ role })),
  clearRole: () => set(() => ({ role: '' })),
  roleModal: false,
  toggleRoleModal: () => set((state) => ({ roleModal: !state.roleModal })),
  mapModal: false,
  toggleMapModal: () => set((state) => ({ mapModal: !state.mapModal })),
  saveGame: false,
  toggleSaveGame: () => set((state) => ({ saveGame: !state.saveGame })),
  reset: () =>
    set(() => ({
      heroes: [],
      heroesImageUrl: [],
      map: '',
      mapImageUrl: '',
      mapType: '',
      result: '',
      role: '',
      roleModal: false,
      mapModal: false,
    })),
}));

export default gameReportStore;
