import { create } from 'zustand';
import type { HeaderStore } from '../types/store/headerTypes';

export const headerStore = create<HeaderStore>()(() => ({
  locations: [
    { label: 'game', url: '/game' },
    { label: 'history', url: '/games' },
    { label: 'stats', url: '/stats' },
    { label: 'profiles', url: '/profiles' },
  ],
}));

export default headerStore;
