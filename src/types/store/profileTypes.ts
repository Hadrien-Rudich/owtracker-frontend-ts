interface ProfileData {
  id: number;
  userId: number;
  label: string;
}

interface ProfileStore {
  profilesData: ProfileData[] | [];
  addProfilesData: (profiles: ProfileData[]) => void;
  profileData: ProfileData;
  setProfileData: (profileObj: ProfileData) => void;
  clearProfileData: () => void;
  newProfile: string;
  setNewProfile: (profile: string) => void;
  addNewProfile: (newProfileObj: ProfileData) => void;
  clearNewProfile: () => void;
  newProfileLabel: string;
  setNewProfileLabel: (label: string) => void;
  clearNewProfileLabel: () => void;
  isUpdatingProfile: boolean;
  setIsUpdatingProfile: (boolean: boolean) => void;
  updatedProfileLabel: string;
  setUpdatedProfileLabel: (label: string) => void;
  clearUpdatedProfileLabel: () => void;
  updateProfileLabel: (profileId: number, newProfileLabel: string) => void;
  deleteProfile: (profile: string) => void;
  reset: () => void;
}

export type { ProfileData, ProfileStore };
