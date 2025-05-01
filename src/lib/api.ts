import axios from "axios";
import { useAuthStore } from "@/store/useAuthStore";

const api = axios.create();

api.interceptors.request.use(
  async (config) => {
    config.baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
    const token = useAuthStore.getState().getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default api;
