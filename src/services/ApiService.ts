import axios, { AxiosResponse } from 'axios';
import type { UserData } from '../types/store/authTypes';
import type { HistoryData } from '../types/store/historyTypes';
import type { ProfileData } from '../types/store/profileTypes';
import type {
  HeroData,
  MapData,
  MapTypeData,
  RoleData,
} from '../types/store/gameReportTypes';

const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    const result: AxiosResponse<T> = await axios(endpoint);
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchHeroesData = async (): Promise<HeroData[]> => {
  const endpoint = 'http://localhost:3002/heroes';
  return fetchData(endpoint);
};

export const fetchRolesData = async (): Promise<RoleData[]> => {
  const endpoint = 'http://localhost:3002/heroroles';
  return fetchData(endpoint);
};

export const fetchMapsData = async (): Promise<MapData[]> => {
  const endpoint = 'http://localhost:3002/maps';
  return fetchData(endpoint);
};

export const fetchMapTypesData = async (): Promise<MapTypeData[]> => {
  const endpoint = 'http://localhost:3002/maptypes';
  return fetchData(endpoint);
};

export const fetchHistoryData = async (): Promise<HistoryData[]> => {
  const endpoint = 'http://localhost:3002/games';
  return fetchData(endpoint);
};

export const fetchUserData = async (): Promise<UserData> => {
  const endpoint = 'http://localhost:3002/account/1';
  return fetchData(endpoint);
};

export const fetchProfilesData = async (): Promise<ProfileData[]> => {
  const endpoint = 'http://localhost:3002/profiles';
  return fetchData(endpoint);
};

export const addUserProfileToDb = async (profile: string): Promise<void> => {
  try {
    const endpoint = 'http://localhost:3002/profiles';
    await axios.post(endpoint, { profile });
  } catch (error) {
    console.error('Failed to add profile', error);
    throw error; // or handle the error accordingly
  }

  try {
    await axios.get('http://localhost:3002/profiles');
  } catch (error) {
    console.error('Failed to fetch profiles data', error);
    throw error; // or handle the error accordingly
  }
};

export const deleteProfileFromDb = async (profile: string): Promise<void> => {
  try {
    const endpoint = `http://localhost:3002/profiles/${profile}`;
    await axios.delete(endpoint);
  } catch (error) {
    console.error('Failed to delete profile', error);
    throw error; // or handle the error accordingly
  }

  try {
    await axios.get('http://localhost:3002/profiles');
  } catch (error) {
    console.error('Failed to fetch profiles data', error);
    throw error; // or handle the error accordingly
  }
};
