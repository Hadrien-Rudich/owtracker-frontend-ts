import { create } from "zustand";

const gameReportStore = create((set) => ({
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
  map: null,
  addMap: (map) => set(() => ({ map: map })),
  typesData: [],
  addTypesData: (types) => set(() => ({ typesData: types })),
  mapType: null,
  addMapType: (mapType) => set(() => ({ mapType: mapType })),
  clearMapType: () => set(() => ({ mapType: null })),
  clearMap: () => set(() => ({ map: null})),
  gameResult: null,
  addGameResult: (gameResult) => set(() => ({ gameResult: gameResult })),
  clearGameResult: () => set(() => ({ gameResult: null })),
  rolesData: [],
  addRolesData: (roles) => set(() => ({ rolesData: roles })),
  role: null,
  addRole: (role) => set(() => ({ role: role })),
  clearRole: () => set(() => ({ role: null })),
  roleModal: false,
  toggleRoleModal: () => set((state) => ({ roleModal: !state.roleModal })),
  mapModal: false,
  toggleMapModal: () => set((state) => ({ mapModal: !state.mapModal })),
}));

export { gameReportStore };
