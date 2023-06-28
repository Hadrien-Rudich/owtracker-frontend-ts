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

const api = axios.create({
  baseURL: 'http://localhost:3002/',
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  return config;
});

const fetchData = async <T>(endpoint: string, method: Method): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.request({
      url: endpoint,
      method,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const postData = async <T>(endpoint: string, data: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.post(endpoint, data);
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

interface ApiUserData {
  accessToken: string;
  user: { id: number; email: string; battleTag: string; refreshToken: string };
}

export const verifyCredentials = async (
  email: string,
  password: string
): Promise<ApiUserData> => {
  const endpoint = 'login';
  const response = await postData<ApiUserData>(endpoint, {
    email,
    password,
  });
  return {
    accessToken: response.accessToken,
    user: response.user,
  };
};

// export const verifyCredentials = async (
//   email: string,
//   password: string
// ): Promise<ApiUserData> => {
//   const endpoint = 'login';
//   const response: AxiosResponse<ApiUserData> = await postData(endpoint, {
//     email,
//     password,
//   });
//   return response.data;
// };

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

export const fetchUserData = async (id: number): Promise<UserData> => {
  const endpoint = `account/${id}`;
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
