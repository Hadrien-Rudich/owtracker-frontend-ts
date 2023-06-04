import { create } from 'zustand';
import { AuthStore } from '../types/store/authTypes';

export const authStore = create<AuthStore>()((set) => ({
  userData: {},
  isLoggedIn: false,
  logIn: () => set(() => ({ isLoggedIn: true })),
  logOut: () => set(() => ({ isLoggedIn: false })),
  setUserData: (userData) => set(() => ({ userData })),
  editAccount: false,
  toggleEditAccount: () =>
    set((state) => ({ editAccount: !state.editAccount })),
  editSecurity: false,
  toggleEditSecurity: () =>
    set((state) => ({ editSecurity: !state.editSecurity })),
  newEmail: '',
  setNewEmail: (email) => set(() => ({ newEmail: email })),
  clearNewEmail: () => set(() => ({ newEmail: '' })),
  newPassword: '',
  setNewPassword: (password) => set(() => ({ newPassword: password })),
  clearNewPassword: () => set(() => ({ newPassword: '' })),
  confirmNewPassword: '',
  setConfirmNewPassword: (password) =>
    set(() => ({ confirmNewPassword: password })),
  clearConfirmNewPassword: () => set(() => ({ confirmNewPassword: '' })),
  newBattleTag: '',
  setNewBattleTag: (battleTag) => set(() => ({ newBattleTag: battleTag })),
  clearNewBattleTag: () => set(() => ({ newBattleTag: '' })),
  activeTab: 'details',
  setActiveTab: (tab) =>
    set(() => ({ activeTab: tab, editAccount: false, editSecurity: false })),
  clearActiveTab: () => set(() => ({ activeTab: 'details' })),
}));

export default 'authStore';
