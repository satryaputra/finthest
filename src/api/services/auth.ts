import { baseApi } from "../baseApi";
import { ICredentials, IAccessToken } from "../types";

export const loginFn = async (credentials: ICredentials): Promise<IAccessToken> => {
  const response = await baseApi.post<IAccessToken>("/api/auth/login", credentials);
  return response.data;
};

export const refreshAccessTokenFn = async (accessToken: string, refreshToken: string): Promise<IAccessToken> => {
  try {
    const response = await baseApi.get<IAccessToken>("/api/auth/refresh", {
      params: { accessToken },
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to refresh access token");
  }
};

