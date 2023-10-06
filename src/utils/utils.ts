import type { GameData } from '../types/store/gameTypes';
import type { MapData } from '../types/store/gameReportTypes';
import type { Month, Outcome } from '../types/utilsTypes';
import type { ProfileData } from '../types/store/profileTypes';

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

const filterGames = (month: number, gameData: GameData[]) => {
  if (Number(month) === 0) {
    return gameData;
  }
  return gameData.filter(
    (game) => Number(game.date.slice(3, 5)) === Number(month)
  );
};

const filterMapTypes = (mapsData: MapData[], mapType: string) => {
  const result = mapsData.filter((map) => map.type === mapType);
  return result;
};

const formatDateForGameEdit = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);

  return `${day}/${month}/${year}`;
};

const dateNowInGameFormat = () => {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');

  const formattedDate = `${day}/${month}`;
  return formattedDate;
};

const convertDateToDatePickerFormat = (date: string) => {
  const [day, month] = date.split('/');
  return new Date(
    new Date().getFullYear(),
    parseInt(month, 10) - 1,
    parseInt(day, 10)
  );
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

const getResultClassNameFromGame = (game: GameData) => {
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

const getResultClassNameFromResult = (result: string) => {
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
  isUpdatingGame: boolean
) => {
  if (game.id === selectedGame.id) {
    return 'selected z-10';
  }
  if (!isUpdatingGame) {
    return 'unselected z-0';
  }
  return 'grayscale hover:cursor-default';
};

const verifyProfileLabelAvailability = (
  newProfileLabel: string,
  profilesData: ProfileData[]
) => {
  if (newProfileLabel === '') {
    console.log('Profile name cannot be empty');
    return false;
  }

  if (profilesData.some((profile) => profile.label === newProfileLabel)) {
    console.log(`You already have a profile with that name`);
    return false;
  }

  return true;
};

export {
  filterGames,
  filterMapTypes,
  formatDateForGameEdit,
  convertDateToDatePickerFormat,
  dateNowInGameFormat as dateNow,
  capitalizeFirstLetter,
  getResultClassName,
  getResultClassNameFromGame,
  getResultClassNameFromResult,
  getGameContainerClassName,
  verifyProfileLabelAvailability,
  months,
};
