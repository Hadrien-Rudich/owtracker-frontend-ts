interface HeroData {
  id: number;
  label: string;
  slug: string;
  role: string;
  imageUrl: string;
}

interface MapData {
  id: number;
  label: string;
  slug: string;
  type: string;
  imageUrl: string;
}

interface MapTypeData {
  id: number;
  label: string;
  imageUrl: string;
}

interface RoleData {
  id: number;
  label: string;
  imageUrl: string;
}

interface GameReportStore {
  heroesData: HeroData[] | [];
  addHeroesData: (heroes: HeroData[]) => void;
  heroes: string[];
  addHero: (hero: string) => void;
  removeHero: (hero: string) => void;
  clearHeroes: () => void;
  heroesImageUrl: string[];
  addHeroImageUrl: (heroImageUrl: string) => void;
  removeHeroImageUrl: (heroImageUrl: string) => void;
  mapsData: MapData[] | [];
  addMapsData: (maps: MapData[]) => void;
  map: string; // Used to be NULL
  addMap: (map: string) => void;
  mapTypesData: MapTypeData[] | [];
  addMapTypesData: (mapTypes: MapTypeData[]) => void;
  mapType: string; // Used to be NULL
  addMapType: (mapType: string) => void;
  clearMapType: () => void;
  clearMap: () => void;
  mapImageUrl: string; // Used to be NULL
  addMapImageUrl: (mapImageUrl: string) => void;
  clearMapImageUrl: () => void;

  result: string; // Used to be NULL
  addResult: (result: string) => void;
  clearResult: () => void;
  rolesData: RoleData[] | [];
  addRolesData: (roles: RoleData[]) => void;
  role: string; // Used to be NULL
  addRole: (role: string) => void;
  clearRole: () => void;
  roleModal: boolean;
  toggleRoleModal: () => void;
  mapModal: boolean;
  toggleMapModal: () => void;
  reset: () => void;
}

export type { HeroData, MapData, MapTypeData, RoleData, GameReportStore };
