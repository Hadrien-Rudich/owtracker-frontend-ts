import { create } from 'zustand';
import { GameReportStore } from '../types/store/gameReportTypes';

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
  gameResult: '',
  addGameResult: (gameResult) => set(() => ({ gameResult })),
  clearGameResult: () => set(() => ({ gameResult: '' })),
  rolesData: [],
  addRolesData: (roles) => set(() => ({ rolesData: roles })),
  role: '',
  addRole: (role) => set(() => ({ role })),
  clearRole: () => set(() => ({ role: '' })),
  roleModal: false,
  toggleRoleModal: () => set((state) => ({ roleModal: !state.roleModal })),
  mapModal: false,
  toggleMapModal: () => set((state) => ({ mapModal: !state.mapModal })),
}));

export default 'gameReportStore';
