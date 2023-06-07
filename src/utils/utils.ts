import type { HistoryData } from '../types/store/historyTypes';
import type { MapData } from '../types/store/gameReportTypes';
import type { Month, Outcome } from '../types/utilsTypes';

const months: Month[] = [
  { label: 'all', index: 0 },
  { label: 'January', index: 1 },
  { label: 'February', index: 2 },
  { label: 'March', index: 3 },
  { label: 'April', index: 4 },
  { label: 'May', index: 5 },
  { label: 'June', index: 6 },
  { label: 'July', index: 7 },
  { label: 'August', index: 8 },
  { label: 'September', index: 9 },
  { label: 'October', index: 10 },
  { label: 'November', index: 11 },
  { label: 'December', index: 12 },
];

const filterHistory = (month: number, data: HistoryData[]) => {
  if (Number(month) === 0) {
    return data;
  }
  return data.filter((game) => Number(game.date.slice(3)) === Number(month));
};

const filterMapTypes = (mapsData: MapData[], mapType: string) => {
  const result = mapsData.filter((map) => map.type === mapType);
  return result;
};

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const getResultClassName = (gameResult: string, outcome: Outcome) => {
  if (gameResult === outcome.label) {
    return `result bg-active${
      outcome.label.charAt(0).toUpperCase() + outcome.label.slice(1)
    }`;
  }
  if (gameResult !== outcome.label) {
    return 'hover:bg-activeColor hover:scale-105 hover:z-50';
  }
  return null;
};

const getResultClassNameFromHistory = (history: HistoryData) => {
  switch (history.result) {
    case 'win':
      return 'bg-activeWin';
    case 'loss':
      return 'bg-activeLoss';
    case 'draw':
      return 'bg-activeDraw';
    default:
      return '';
  }
};

const getResultClassNameFromGameResult = (gameResult: string) => {
  switch (gameResult) {
    case 'win':
      return 'bg-activeWin';
    case 'loss':
      return 'bg-activeLoss';
    case 'draw':
      return 'bg-activeDraw';
    default:
      return '';
  }
};

export {
  filterHistory,
  filterMapTypes,
  capitalizeFirstLetter,
  getResultClassName,
  getResultClassNameFromHistory,
  getResultClassNameFromGameResult,
  months,
};
