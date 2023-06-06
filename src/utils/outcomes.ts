import type { HistoryData } from '../types/store/historyTypes';

// const getResultClassName = (gameResult: string, outcome) => {
//   if (gameResult === outcome.label) {
//     return `result bg-active${
//       outcome.label.charAt(0).toUpperCase() + outcome.label.slice(1)
//     }`;
//   }
//   if (gameResult !== outcome.label) {
//     return 'hover:bg-activeColor hover:scale-105 hover:z-50';
//   }
//   return null;
// };

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
  // getResultClassName,
  getResultClassNameFromHistory,
  getResultClassNameFromGameResult,
};
