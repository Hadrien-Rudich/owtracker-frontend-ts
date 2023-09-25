import type { GameData } from '../../types/store/gameTypes';
import {
  fetchDataFromApi,
  postDataToApi,
  patchDataOnApi,
  deleteDataFromApi,
} from './general';

export interface GameAddedToApi {
  message: string;
  game: {
    id: number;
    userId: number;
    profileId: number;
    result: string;
    map: string;
    mapType: string;
    mapImageUrl: string;
    heroes: string[];
    heroesImageUrl: string[];
    date: string;
  };
}

interface GameReportForm {
  result: string;
  map: string;
  mapType: string;
  mapImageUrl: string;
  heroes: string[];
  heroesImageUrl: string[];
}

interface GameDeletedFromApi {
  message: string;
  game: { id: number; userId: number; profileId: number };
}

export const fetchGamesFromApi = async (
  userId: number,
  profileId: number
): Promise<GameData[]> => {
  const endpoint = `user/${userId}/profiles/${profileId}/games`;
  return fetchDataFromApi(endpoint, 'GET');
};
export const addGameToApi = async (
  userId: number,
  profileId: number,
  gameObj: GameReportForm
): Promise<GameAddedToApi> => {
  const endpoint = `user/${userId}/profiles/${profileId}/games`;
  const response = await postDataToApi<GameAddedToApi>(endpoint, {
    userId,
    profileId,
    ...gameObj,
  });
  return {
    message: response.message,
    game: response.game,
  };
};

export const updateGameOnApi = async (
  userId: number,
  profileId: number,
  gameId: number,
  gameObj: GameReportForm
): Promise<GameAddedToApi> => {
  const endpoint = `user/${userId}/profiles/${profileId}/games/${gameId}`;
  const response = await patchDataOnApi<GameAddedToApi>(endpoint, {
    gameId,
    ...gameObj,
  });
  return {
    message: response.message,
    game: response.game,
  };
};

export const deleteGameFromApi = async (
  userId: number,
  profileId: number,
  gameId: number
): Promise<void> => {
  const endpoint = `user/${userId}/profiles/${profileId}/games/${gameId}`;
  await deleteDataFromApi<GameDeletedFromApi>(endpoint, {
    gameId,
  });
};
