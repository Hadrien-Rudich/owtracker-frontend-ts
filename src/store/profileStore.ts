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
      profilesData: [...state.profilesData, newProfileObj], // to be modified
    })),
  clearNewProfile: () =>
    set(() => ({
      newProfile: '',
    })),

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
