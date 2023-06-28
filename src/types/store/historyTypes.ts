interface HistoryData {
  id: number;
  user: number;
  profile: string;
  result: string;
  map: string;
  mapType: string;
  mapImageUrl: string;
  heroes: string[];
  heroesImageUrl: string[];
  date: string; // to be modified to Date
}

interface HistoryStore {
  historyData: HistoryData[] | [];
  addHistoryData: (history: HistoryData[]) => void;
  removeHistoryData: () => void;
  currentMonth: number;
  setCurrentMonth: (month: number) => void;
}

export type { HistoryData, HistoryStore };
