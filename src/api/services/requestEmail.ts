import { baseApi } from "../baseApi";
import { IRequestEmail, IGeneralResponse } from "../types";

export const requestEmailFn = async (credentials: IRequestEmail): Promise<IGeneralResponse> => {
  const response = await baseApi.post<IGeneralResponse>("/api/auth/forgot-password/request", credentials);
  return response.data;
};
