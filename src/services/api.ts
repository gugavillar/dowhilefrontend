import axios from 'axios';

const baseURLEnv = String(import.meta.env.VITE_BASE_URL);
export const api = axios.create({
  baseURL: baseURLEnv
});