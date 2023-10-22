import type { GameData } from '../types/store/gameTypes';
import type { Outcome } from '../types/utilsTypes';

const getResultClassName = (gameResult: string, outcome: Outcome): string => {
  if (gameResult === outcome.label) {
    return `result bg-active${
      outcome.label.charAt(0).toUpperCase() + outcome.label.slice(1)
    }`;
  }
  if (gameResult !== outcome.label) {
    return 'hover:bg-activeColor hover:scale-105 hover:z-50';
  }
  return '';
};

const getResultClassNameFromGame = (game: GameData): string => {
  switch (game.result) {
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

const getResultClassNameFromResult = (result: string): string => {
  switch (result) {
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

const getGameContainerClassName = (
  game: GameData,
  selectedGame: GameData,
  isUpdatingGame: boolean,
  isCreatingGame: boolean
): string => {
  if (isCreatingGame) {
    return 'grayscale hover:cursor-default';
  }
  if (game.id === selectedGame.id) {
    return 'selected z-10';
  }
  if (!isUpdatingGame) {
    return 'unselected z-0';
  }
  return ' grayscale hover:cursor-default';
};

export {
  getResultClassName,
  getResultClassNameFromGame,
  getResultClassNameFromResult,
  getGameContainerClassName,
};
