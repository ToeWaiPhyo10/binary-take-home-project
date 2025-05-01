import axios from "axios";

const api = axios.create();

api.interceptors.request.use(
  async (config) => {
    config.baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
    const token = "";
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default api;
