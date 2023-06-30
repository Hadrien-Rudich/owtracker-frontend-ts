interface ProfileData {
  id: number;
  userId: number;
  label: string;
}

interface NewProfileObj {
  id: number;
  userId: number;
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
  addNewProfile: (newProfileObj: NewProfileObj) => void;
  clearNewProfile: () => void;
  newProfileLabel: string;
  setNewProfileLabel: (label: string) => void;
  clearNewProfileLabel: () => void;
  deleteProfile: (profile: string) => void;
  reset: () => void;
}

export type { ProfileData, ProfileStore };
