import { create } from 'zustand';
import { ResetStore } from '../types/store/resetType';

import { gameReportStore } from './gameReportStore';
import { historyStore } from './historyStore';
import { profileStore } from './profileStore';

export const resetStore = create<ResetStore>(() => ({
  resetAllStores: () => {
    gameReportStore.getState().reset();
    historyStore.getState().reset();
    profileStore.getState().reset();
  },
}));

export default resetStore;
