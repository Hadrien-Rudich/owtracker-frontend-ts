interface ProfileData {
  id: number;
  userId: number;
  label: string;
}

interface ProfileStore {
  profilesData: ProfileData[] | [];
  addProfilesData: (profiles: ProfileData[]) => void;
  selectedProfile: ProfileData;
  selectProfile: (profileObj: ProfileData) => void;
  unselectProfile: () => void;
  newProfile: string;
  setNewProfile: (profile: string) => void;
  addNewProfile: (newProfileObj: ProfileData) => void;
  clearNewProfile: () => void;
  isUpdatingProfile: boolean;
  setIsUpdatingProfile: (boolean: boolean) => void;
  updatedProfileLabel: string;
  setUpdatedProfileLabel: (label: string) => void;
  clearUpdatedProfileLabel: () => void;
  updateProfileLabel: (profileId: number, newProfileLabel: string) => void;
  deleteProfile: (profile: string) => void;
  profileToast: boolean;
  setProfileToast: (value: boolean) => void;
  setProfileToastMessage: (message: string) => void;
  profileToastMessage: string;

  reset: () => void;
}

export type { ProfileData, ProfileStore };
