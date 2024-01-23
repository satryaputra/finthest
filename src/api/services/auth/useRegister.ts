import baseApi from "@/api/config/baseApi";
import { useMutation } from "@tanstack/react-query";
import type { IAccessToken, IUser } from "@/api/types";
import useAuthStore from "@/hooks/store/useAuthStore";

const useRegister = () => {
  return useMutation({
    mutationFn: async (registerData: Omit<IUser, "id">): Promise<IAccessToken> => {
      const response = await baseApi.post<IAccessToken>("auth/register", registerData);
      return response.data;
    },
    onSuccess: ({ accessToken }) => {
      useAuthStore.getState().setAccessToken(accessToken);
    }
  });
};

export default useRegister;
