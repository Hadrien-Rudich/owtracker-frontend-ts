import { create } from 'zustand';
import type { ProfileStore, ProfileData } from '../types/store/profileTypes';

export const profileStore = create<ProfileStore>()((set) => ({
  profilesData: [],
  addProfilesData: (profilesOb) => set(() => ({ profilesData: profilesOb })),
  selectedProfile: { label: '' } as ProfileData,
  selectProfile: (profileObj) =>
    set(() => ({
      selectedProfile: profileObj,
    })),
  unselectProfile: () =>
    set(() => ({
      selectedProfile: {} as ProfileData,
    })),
  newProfile: '',
  setNewProfile: (profile) =>
    set(() => ({
      newProfile: profile,
    })),
  clearNewProfile: () =>
    set(() => ({
      newProfile: '',
    })),
  addNewProfile: (newProfileObj) =>
    set((state) => ({
      profilesData: [...state.profilesData, newProfileObj],
    })),
  updatedProfileLabel: '',

  setUpdatedProfileLabel: (label) =>
    set(() => ({
      updatedProfileLabel: label,
    })),

  clearUpdatedProfileLabel: () =>
    set(() => ({
      updatedProfileLabel: '',
    })),

  isUpdatingProfile: false,
  setIsUpdatingProfile: (boolean: boolean) =>
    set(() => ({
      isUpdatingProfile: boolean,
    })),
  updateProfileLabel(profileId, newProfileLabel) {
    set((state) => ({
      profilesData: state.profilesData.map((p) =>
        p.id === profileId ? { ...p, label: newProfileLabel } : p
      ),
    }));
  },
  deleteProfile: (profile) => {
    set((state) => ({
      profilesData: state.profilesData.filter((p) => p.label !== profile),
      profile: '',
    }));
  },
  profileToastMessage: '',
  setProfileToastMessage: (message: string) =>
    set(() => ({ profileToastMessage: message })),
  profileToast: false,
  setProfileToast: (value: boolean) => set(() => ({ profileToast: value })),
  reset: () => {
    set(() => ({
      profilesData: [],
      profile: '',
      newProfile: '',
    }));
  },
}));

export default profileStore;
