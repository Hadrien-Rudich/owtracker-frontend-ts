<<<<<<< HEAD:src/services/ApiService.tsx
import axios, { AxiosResponse, Method } from 'axios';
import type { UserData } from '../types/store/authTypes';
import type { HistoryData } from '../types/store/historyTypes';
import type { ProfileData } from '../types/store/profileTypes';
import type {
  HeroData,
  MapData,
  MapTypeData,
  RoleData,
} from '../types/store/gameReportTypes';

const instance = axios.create({
  baseURL: 'http://localhost:3002/',
  withCredentials: true,
});

const fetchData = async <T,>(endpoint: string, method: Method): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await instance.request({
      url: endpoint,
      method,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const postData = async <T,>(endpoint: string, data: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await instance.post(endpoint, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchHeroesData = async (): Promise<HeroData[]> => {
  const endpoint = 'heroes';
  return fetchData(endpoint, 'GET');
};

export const fetchRolesData = async (): Promise<RoleData[]> => {
  const endpoint = 'heroroles';
  return fetchData(endpoint, 'GET');
};

export const fetchMapsData = async (): Promise<MapData[]> => {
  const endpoint = 'maps';
  return fetchData(endpoint, 'GET');
};

export const fetchMapTypesData = async (): Promise<MapTypeData[]> => {
  const endpoint = 'maptypes';
  return fetchData(endpoint, 'GET');
};

export const fetchHistoryData = async (): Promise<HistoryData[]> => {
  const endpoint = 'history';
  return fetchData(endpoint, 'GET');
};

// export const verifyCredentials = async (
//   email: string,
//   password: string
// ): Promise<void> => {
//   try {
//     const endpoint = 'http://localhost:3002/login';
//     await axios.post(endpoint, { email, password });
//   } catch (error) {
//     console.error('Failed to authenticate user', error);
//     throw error;
//   }
//   // return fetchData(endpoint);
// };

export const verifyCredentials = async (
  email: string,
  password: string
): Promise<void> => {
  const endpoint = 'login';
  await postData(endpoint, { email, password });
};

// export const register = async (
//   email: string,
//   password: string,
//   battleTag: string
// ): Promise<void> => {
//   try {
//     const endpoint = 'http://localhost:3002/register';
//     const response = await axios.post(endpoint, { email, password, battleTag });
//     console.log(response.data);
//   } catch (error) {
//     console.error('Failed to register user', error);
//     throw error;
//   }
// };

export const register = async (
  email: string,
  password: string,
  battleTag: string
): Promise<void> => {
  const endpoint = 'register';
  await postData(endpoint, { email, password, battleTag });
};

export const fetchUserData = async (id: string): Promise<UserData> => {
  const endpoint = `accoount/${id}`;
  return fetchData(endpoint, 'GET');
};

export const fetchProfilesData = async (): Promise<ProfileData[]> => {
  const endpoint = 'profiles';
  return fetchData(endpoint, 'GET');
};

// export const addUserProfileToDb = async (profile: string): Promise<void> => {
//   try {
//     const endpoint = 'http://localhost:3002/profiles';
//     await axios.post(endpoint, { profile });
//   } catch (error) {
//     console.error('Failed to add profile', error);
//     throw error; // or handle the error accordingly
//   }

//   try {
//     await axios.get('http://localhost:3002/profiles');
//   } catch (error) {
//     console.error('Failed to fetch profiles data', error);
//     throw error; // or handle the error accordingly
//   }
// };

export const addUserProfileToDb = async (profile: string): Promise<void> => {
  const endpoint = 'profiles';
  await postData(endpoint, { profile });

  try {
    await fetchData('profiles', 'GET');
  } catch (error) {
    console.error('Failed to fetch profiles data', error);
    throw error;
  }
};

// export const deleteProfileFromDb = async (profile: string): Promise<void> => {
//   try {
//     const endpoint = `http://localhost:3002/profiles/${profile}`;
//     await axios.delete(endpoint);
//   } catch (error) {
//     console.error('Failed to delete profile', error);
//     throw error; // or handle the error accordingly
//   }

//   try {
//     await axios.get('http://localhost:3002/profiles');
//   } catch (error) {
//     console.error('Failed to fetch profiles data', error);
//     throw error; // or handle the error accordingly
//   }
// };

export const deleteProfileFromDb = async (profile: string): Promise<void> => {
  const endpoint = `profiles/${profile}`;
  await fetchData(endpoint, 'DELETE');

  try {
    await fetchData('profiles', 'GET');
  } catch (error) {
    console.error('Failed to fetch profiles data', error);
    throw error;
  }
};
=======
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
>>>>>>> 706f89e0aa12e83919b47ee19a9a1e0332652f8b:src/services/ApiService.ts
