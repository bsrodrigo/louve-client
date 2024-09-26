import axios from "axios";

export const avancesApi = axios.create({
  // baseURL: process.env.REACT_APP_API_HOST,
});

avancesApi.interceptors.request.use((config) => {
  //   const token = getFromLocalStorage('token')

  //   config.headers.Authorization = `Bearer ${token}`

  return config;
});
