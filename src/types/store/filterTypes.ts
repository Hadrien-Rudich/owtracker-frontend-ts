// interface HeroData {
//   id: number;
//   label: string;
//   slug: string;
//   role: string;
//   imageUrl: string;
// }

// interface MapData {
//   id: number;
//   label: string;
//   slug: string;
//   type: string;
//   imageUrl: string;
// }

// interface MapTypeData {
//   id: number;
//   label: string;
//   imageUrl: string;
// }

// interface RoleData {
//   id: number;
//   label: string;
//   imageUrl: string;
// }

interface FilterStore {
  filterDropDown: boolean;
  setFilterDropDown: (value: boolean) => void;

  expandedFilter: string;
  setExpandedFilter: (value: string) => void;
  clearExpandedFilter: () => void;

  activeFilter: string;
  setActiveFilter: (value: string) => void;
  clearActiveFilter: () => void;

  filteredHeroes: string[];
  filterHero: (hero: string) => void;
  unfilterHero: (hero: string) => void;
  clearFilteredHeroes: () => void;

  filteredMaps: string[];
  filterMap: (map: string) => void;
  unfilterMap: (map: string) => void;
  clearFilteredMaps: () => void;

  filteredResults: string[];
  filterResult: (result: string) => void;
  unfilterResult: (result: string) => void;
  clearFilteredResults: () => void;
}

export type {
  //  HeroData, MapData, MapTypeData, RoleData,
  // eslint-disable-next-line import/prefer-default-export
  FilterStore,
};
