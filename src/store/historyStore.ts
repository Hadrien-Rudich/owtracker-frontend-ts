import { create } from 'zustand';
import type { HistoryStore } from '../types/store/historyTypes';

export const historyStore = create<HistoryStore>()((set) => ({
  historyData: [],
  addHistoryData: (history) => set(() => ({ historyData: history })),
  removeHistoryData: () => {
    set(() => ({
      historyData: [],
    }));
  },
  currentMonth: 0,
  setCurrentMonth: (month) =>
    set(() => ({
      currentMonth: month,
    })),
  reset: () => {
    set(() => ({
      historyData: [],
      currentMonth: 0,
    }));
  },
}));

export default historyStore;
