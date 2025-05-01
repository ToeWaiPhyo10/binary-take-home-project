import AuthServices from "@/services/authServices";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface LoginCredentials {
  name: string;
  password: string;
}

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const router = useRouter();

  const login = useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const res = await AuthServices.login(credentials);
      return res;
    },
    onSuccess: (data) => {
      setAuth(
        {
          id: data.data.id,
          name: data.data.name,
          picture: data.data.picture,
        },
        data.data.token
      );

      router.push("/my-posts");
    },
  });

  return login;
};
