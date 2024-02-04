import baseApi from "@/api/config/baseApi";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import type { IAccessToken, ICredentials } from "@/api/types";
import useAuthStore from "@/hooks/store/useAuthStore";

const LOGIN_URL = "/auth/login";

const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (loginData: ICredentials): Promise<IAccessToken> => {
      const response = await baseApi.post(LOGIN_URL, loginData);
      return response.data;
    },
    onSuccess: ({ accessToken }) => {
      useAuthStore.getState().setAccessToken(accessToken);
      navigate("/");
    },
  });
};

export default useLogin;
