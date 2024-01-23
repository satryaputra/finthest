import baseApi from "@/api/config/baseApi";
import type { IAccessToken } from "@/api/types";

const useRefreshToken = async (token: string | null): Promise<IAccessToken> => {
  const response = await baseApi.get<IAccessToken>("auth/refresh", {
    params: {
      accessToken: token,
    },
  });
  return response.data;
};

export default useRefreshToken;
