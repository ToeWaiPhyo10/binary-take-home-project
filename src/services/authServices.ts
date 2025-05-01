import api from "@/lib/api";
import { AuthResponse, LoginCredentials } from "@/types/auth";
import { AxiosResponse } from "axios";

const AuthServices = {
  login: async (credentials: LoginCredentials) => {
    const res: AxiosResponse<AuthResponse> = await api.post(
      "/auth",
      credentials
    );
    return res.data;
  },
};

export default AuthServices;
