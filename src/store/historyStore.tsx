import { create } from "zustand";
import { HistoryStore } from "../types/store/historyTypes";

const historyStore = create<HistoryStore>()((set) => ({
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
}));

export { historyStore };
