import { create } from 'zustand';
import type { ProfileStore } from '../types/store/profileTypes';

export const profileStore = create<ProfileStore>()((set) => ({
  profilesData: [],
  addProfilesData: (profiles) => set(() => ({ profilesData: profiles })),
  profile: '',
  setProfile: (profile) =>
    set(() => ({
      profile,
    })),
  clearProfile: () =>
    set(() => ({
      profile: '',
    })),
  newProfile: '',
  setNewProfile: (profile) =>
    set(() => ({
      newProfile: profile,
    })),
  addNewProfile: (newProfileObj) =>
    set((state) => ({
      profilesData: [...state.profilesData, newProfileObj],
    })),
  clearNewProfile: () =>
    set(() => ({
      newProfile: '',
    })),
  newProfileLabel: '',
  setNewProfileLabel: (label) =>
    set(() => ({
      newProfileLabel: label,
    })),
  clearNewProfileLabel: () =>
    set(() => ({
      updatedProfileLabel: '',
    })),
  updateProfile: false,

  updatedProfileLabel: '',

  setUpdatedProfileLabel: (label) =>
    set(() => ({
      updatedProfileLabel: label,
    })),

  toggleUpdateProfileLabel: false,
  toggleUpdateProfile: () =>
    set((state) => ({
      toggleUpdateProfileLabel: !state.toggleUpdateProfileLabel,
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
  reset: () => {
    set(() => ({
      profilesData: [],
      profile: '',
      newProfile: '',
    }));
  },
}));

export default profileStore;
