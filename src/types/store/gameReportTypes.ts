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
  selectedHeroes: string[];
  selectHero: (hero: string, heroImageUrl: string) => void;
  unselectHero: (hero: string, heroImageUrl: string) => void;
  unselectHeroes: () => void;
  selectedHeroesImageUrl: string[];
  mapsData: MapData[] | [];
  addMapsData: (maps: MapData[]) => void;
  selectedMap: string; // Used to be NULL
  selectMap: (map: string, mapImageUrl: string) => void;
  mapTypesData: MapTypeData[] | [];
  addMapTypesData: (mapTypes: MapTypeData[]) => void;
  selectedMapType: string; // Used to be NULL
  selectMapType: (mapType: string) => void;
  unselectMapType: () => void;
  unselectMap: () => void;
  selectedMapImageUrl: string; // Used to be NULL
  selectedResult: string; // Used to be NULL
  selectResult: (result: string) => void;
  unselectResult: () => void;
  rolesData: RoleData[] | [];
  addRolesData: (roles: RoleData[]) => void;
  selectedRole: string; // Used to be NULL
  selectRole: (role: string) => void;
  unselectRole: () => void;
  roleModal: boolean;
  toggleRoleModal: () => void;
  mapModal: boolean;
  toggleMapModal: () => void;
  saveGame: boolean;
  toggleSaveGame: () => void;
  reset: () => void;
}

export type { HeroData, MapData, MapTypeData, RoleData, GameReportStore };
