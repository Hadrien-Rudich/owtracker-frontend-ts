interface ProfilesData {
  id: number;
  label: string;
}

interface ProfileStore {
  profilesData: ProfilesData[] | [];
  addProfilesData: (profiles: ProfilesData[] | []) => void;
  profile: string;
  setProfile: (profile: string) => void;
  clearProfile: () => void;
  newProfile: string;
  setNewProfile: (profile: string) => void;
  addNewProfile: (profile: string) => void;
  clearNewProfile: () => void;
  deleteProfile: (profile: string) => void;
}

export type { ProfilesData, ProfileStore };
