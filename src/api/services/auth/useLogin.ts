import { baseApi } from "@/api/baseApi";
import { IAccessToken, ICredentials } from "@/api/types";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (loginData: ICredentials): Promise<IAccessToken> => {
      const response = await baseApi.post("/auth/login", loginData);
      return response.data;
    },
    onSuccess: ({ accessToken }) => {
      localStorage.setItem("accessToken", accessToken);
    },
  });
};
