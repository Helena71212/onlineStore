import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../constans";

const BASE_URL = "http://localhost:3000";
const apiConfig = {
  baseURL: BASE_URL,
};

const api = axios.create(apiConfig);
api.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  return axiosConfig;
});
export { api };
