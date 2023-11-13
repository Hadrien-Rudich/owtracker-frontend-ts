import { create } from 'zustand';
import type { FilterStore } from '../types/store/filterTypes';

export const filterStore = create<FilterStore>()((set) => ({
  filterDropDown: false,
  setFilterDropDown: (boolean) => set(() => ({ filterDropDown: boolean })),

  expandedFilter: '',
  setExpandedFilter: (filterName: string) =>
    set(() => ({ expandedFilter: filterName })),
  clearExpandedFilter: () => set(() => ({ expandedFilter: '' })),

  activeFilter: '',
  setActiveFilter: (filterName) => set(() => ({ activeFilter: filterName })),
  clearActiveFilter: () => set(() => ({ activeFilter: '' })),

  filteredHeroes: [],
  filterHero: (hero: string) =>
    set((state) => ({
      filteredHeroes: [...state.filteredHeroes, hero],
    })),
  unfilterHero: (hero: string) =>
    set((state) => ({
      filteredHeroes: state.filteredHeroes.filter((h: string) => h !== hero),
    })),
  clearFilteredHeroes: () => set(() => ({ filteredHeroes: [] })),

  filteredMaps: [],
  filterMap: (map: string) =>
    set((state) => ({
      filteredMaps: [...state.filteredMaps, map],
    })),
  unfilterMap: (map: string) =>
    set((state) => ({
      filteredMaps: state.filteredMaps.filter((m: string) => m !== map),
    })),

  clearFilteredMaps: () => set(() => ({ filteredMaps: [] })),

  filteredResults: [],
  filterResult: (result: string) =>
    set((state) => ({
      filteredResults: [...state.filteredResults, result],
    })),
  unfilterResult: (result: string) =>
    set((state) => ({
      filteredResults: state.filteredResults.filter(
        (r: string) => r !== result
      ),
    })),
  clearFilteredResults: () => set(() => ({ filteredResults: [] })),
}));

export default filterStore;
