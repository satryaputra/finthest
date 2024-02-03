import baseApi from "@/api/config/baseApi";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import type { IAccessToken, IUser } from "@/api/types";
import useAuthStore from "@/hooks/store/useAuthStore";

const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (registerData: Omit<IUser, "id">): Promise<IAccessToken> => {
      const response = await baseApi.post<IAccessToken>("auth/register", registerData);
      return response.data;
    },
    onSuccess: ({ accessToken }) => {
      useAuthStore.getState().setAccessToken(accessToken);
      navigate("/");
    }
  });
};

export default useRegister;