interface ProfileData {
  id: number;
  label: string;
}

interface ProfileStore {
  profilesData: ProfileData[] | [];
  addProfilesData: (profiles: ProfileData[]) => void;
  profile: string;
  setProfile: (profile: string) => void;
  clearProfile: () => void;
  newProfile: string;
  setNewProfile: (profile: string) => void;
  addNewProfile: (profile: string) => void;
  clearNewProfile: () => void;
  deleteProfile: (profile: string) => void;
}

export type { ProfileData, ProfileStore };
