import axios from "axios";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export default function useAxiosSecure() {
  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    const responseInterceptor = instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response?.status === 401) {
          console.log("Unauthorized access");
        }
      },
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [instance]);

  return instance;
}
