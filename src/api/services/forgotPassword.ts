import { baseApi } from "../baseApi";
import { IForgotPassword, IGeneralResponse } from "../types";

export const requestEmailFn = async (userToken: string,credentials: IForgotPassword): Promise<IGeneralResponse> => {
  const response = await baseApi.post<IGeneralResponse>(`/api/auth/forgot-password/${userToken}`, credentials);
  return response.data;
};
