import { create } from 'zustand';
import type { GameReportStore } from '../types/store/gameReportTypes';

export const gameReportStore = create<GameReportStore>()((set) => ({
  heroesData: [],
  addHeroesData: (heroes) => set(() => ({ heroesData: heroes })),
  selectedHeroes: [],
  selectedHeroesImageUrl: [],
  selectHero: (hero, heroImageUrl) =>
    set((state) => ({
      selectedHeroes: [...state.selectedHeroes, hero],
      selectedHeroesImageUrl: [...state.selectedHeroesImageUrl, heroImageUrl],
    })),
  unselectHero: (hero, heroImageUrl) => {
    set((state) => ({
      selectedHeroes: state.selectedHeroes.filter((h) => h !== hero),
      selectedHeroesImageUrl: state.selectedHeroesImageUrl.filter(
        (u) => u !== heroImageUrl
      ),
    }));
  },
  unselectHeroes: () =>
    set(() => ({ selectedHeroes: [], selectedHeroesImageUrl: [] })),
  mapsData: [],
  addMapsData: (maps) => set(() => ({ mapsData: maps })),
  selectedMap: '',
  selectedMapImageUrl: '',
  selectMap: (map, mapImageUrl) =>
    set(() => ({ selectedMap: map, selectedMapImageUrl: mapImageUrl })),
  unselectMap: () => set(() => ({ selectedMap: '', selectedMapImageUrl: '' })),
  mapTypesData: [],
  addMapTypesData: (types) => set(() => ({ mapTypesData: types })),
  selectedMapType: '',
  selectMapType: (mapType) => set(() => ({ selectedMapType: mapType })),
  unselectMapType: () => set(() => ({ selectedMapType: '' })),
  selectedResult: '',
  selectResult: (result) => set(() => ({ selectedResult: result })),
  unselectResult: () => set(() => ({ selectedResult: '' })),
  rolesData: [],
  addRolesData: (roles) => set(() => ({ rolesData: roles })),
  selectedRole: '',
  selectRole: (role) => set(() => ({ selectedRole: role })),
  unselectRole: () => set(() => ({ selectedRole: '' })),
  roleModal: false,
  toggleRoleModal: () => set((state) => ({ roleModal: !state.roleModal })),
  mapModal: false,
  toggleMapModal: () => set((state) => ({ mapModal: !state.mapModal })),
  savingGameInProgress: false,
  setSavingGameInProgress: (value: boolean) =>
    set(() => ({ savingGameInProgress: value })),
  reset: () =>
    set(() => ({
      selectedHeroes: [],
      selectedHeroesImageUrl: [],
      selectedMap: '',
      selectedMapImageUrl: '',
      selectedMapType: '',
      selectedResult: '',
      selectedRole: '',
      roleModal: false,
      mapModal: false,
    })),
}));

export default gameReportStore;
