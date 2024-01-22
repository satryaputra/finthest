import { baseApi } from "@/api/baseApi";
import { IAccessToken, IUser } from "@/api/types";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (registerData: Omit<IUser, "id">): Promise<IAccessToken> => {
      const response = await baseApi.post<IAccessToken>("auth/register", registerData);
      return response.data;
    },
    onSuccess: ({ accessToken }) => {
      localStorage.setItem("accessToken", accessToken);
    }
  });
};
