import { baseApi } from "../baseApi";
import { IRegisterData, IAccessToken } from "../types";

export const registerFn = async (credentials: IRegisterData): Promise<IAccessToken> => {
    const response = await baseApi.post<IAccessToken>("/api/users", credentials);
    return response.data;
  };