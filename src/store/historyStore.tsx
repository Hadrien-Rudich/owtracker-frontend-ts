import { create } from "zustand";
import { HistoryStore } from "./types/historyTypes";

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
