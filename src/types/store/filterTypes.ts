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
}

export type {
  //  HeroData, MapData, MapTypeData, RoleData,
  // eslint-disable-next-line import/prefer-default-export
  FilterStore,
};
