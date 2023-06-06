import type { HistoryData } from '../types/store/historyTypes';
import type { MapTypeData } from '../types/store/gameReportTypes';

const filterHistory = (month: number, data: HistoryData[]) => {
  if (Number(month) === 0) {
    return data;
  }
  return data.filter((game) => Number(game.date.slice(3)) === Number(month));
};

const filterMapTypes = (mapsData: MapTypeData[], mapType: string) => {
  const result = mapsData.filter((map) => map.label === mapType);
  return result;
};

export { filterHistory, filterMapTypes };
