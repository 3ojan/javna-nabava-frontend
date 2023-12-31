import axios from 'axios';
import { getACCESS_TOKEN_key } from './contexts/ContextProvider';

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(getACCESS_TOKEN_key);
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    try {
      const { response } = error;
      if (response.status === 401) {
        localStorage.removeItem(getACCESS_TOKEN_key);
      }
    } catch (e) {
      console.error(e);
    }

    throw error;
  }
);
export default axiosClient;
