interface ProfileData {
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
  addNewProfile: (newProfileObj: ProfileData) => void;
  clearNewProfile: () => void;
  newProfileLabel: string;
  setNewProfileLabel: (label: string) => void;
  clearNewProfileLabel: () => void;
  updateProfile: boolean;
  updatedProfileLabel: string;
  setUpdatedProfileLabel: (label: string) => void;
  toggleUpdateProfile: () => void;
  toggleUpdateProfileLabel: boolean;
  updateProfileLabel: (profileId: number, newProfileLabel: string) => void;
  deleteProfile: (profile: string) => void;
  reset: () => void;
}

export type { ProfileData, ProfileStore };
