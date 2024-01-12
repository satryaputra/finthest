import { baseApi } from "../baseApi";
import { ICalculationData, IResponseCalculation } from "../types";

const id = "id";
export const calculationFn = async (credentials: ICalculationData): Promise<IResponseCalculation> => {
    const response = await baseApi.post<IResponseCalculation>(`/api/calculation/${id}`, credentials);
    return response.data;
  };