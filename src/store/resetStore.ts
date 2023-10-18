import { create } from 'zustand';
import { ResetStore } from '../types/store/resetType';

import { gameDataStore } from './gameDataStore';
import { gameStore } from './gameStore';
import { profileStore } from './profileStore';

export const resetStore = create<ResetStore>(() => ({
  resetAllStores: () => {
    gameDataStore.getState().reset();
    gameStore.getState().reset();
    profileStore.getState().reset();
  },
}));

export default resetStore;
