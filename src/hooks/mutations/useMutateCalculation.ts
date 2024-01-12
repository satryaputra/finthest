import { calculationFn } from "@/api/services/calculation";
import { ICalculationData } from "@/api/types";
import { useMutation } from "@tanstack/react-query";

export const useMutateCalculation = () => {
  return {
    calculation: useMutation({
      mutationFn: async (credentials: ICalculationData) => await calculationFn(credentials),
    }),
  };
};
