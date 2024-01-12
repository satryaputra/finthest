import { baseApi } from "../baseApi";
import { ICredentials, IAccessToken } from "../types";

export const loginFn = async (credentials: ICredentials): Promise<IAccessToken> => {
  const response = await baseApi.post<IAccessToken>("/api/auth/login", credentials);
  return response.data;
};
