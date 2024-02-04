import baseApi from "@/api/config/baseApi";
import type { IAccessToken } from "@/api/types";

const REFRESH_TOKEN_URL = "auth/refresh";

const useRefreshToken = async (token: string | null): Promise<IAccessToken> => {
  const response = await baseApi.get<IAccessToken>(REFRESH_TOKEN_URL, {
    params: {
      accessToken: token,
    },
  });
  return response.data;
};

export default useRefreshToken;
