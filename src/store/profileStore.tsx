import { create } from 'zustand';
import { ProfileStore } from '../types/store/profileTypes';

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
  addNewProfile: (profile) =>
    set((state) => ({
      profilesData: [...state.profilesData, { label: profile, id: 10 }], // to be modified
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
}));

export default 'profileStore';
