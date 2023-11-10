import { create } from 'zustand';
import type { FilterStore } from '../types/store/filterTypes';

export const filterStore = create<FilterStore>()((set) => ({
  filterDropDown: false,
  setFilterDropDown: (value) => set(() => ({ filterDropDown: value })),

  // heroesData: [],
  // rolesData: [],
  // mapsData: [],
  // mapTypesData: [],
  // addHeroesData: (heroes) => set(() => ({ heroesData: heroes })),
  // addMapsData: (maps) => set(() => ({ mapsData: maps })),
  // addMapTypesData: (types) => set(() => ({ mapTypesData: types })),
  // addRolesData: (roles) => set(() => ({ rolesData: roles })),
}));

export default filterStore;
