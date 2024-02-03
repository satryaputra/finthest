import axios from "axios";
import useAuthStore from "@/hooks/store/useAuthStore";
import useRefreshToken from "../services/auth/useRefreshToken";

const privateApi = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

privateApi.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error?.config;
    const accessToken = useAuthStore.getState().accessToken;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { accessToken: newAccessToken } = await useRefreshToken(
          accessToken
        );
        useAuthStore.getState().setAccessToken(newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return privateApi(originalRequest);
      } catch (error: any) {
        if (error.response?.status === 403) {
          useAuthStore.getState().resetAuth();
          window.location.assign("/login");
        }
        console.log("need login");
      }
    }
    return Promise.reject(error);
  }
);

export default privateApi;
