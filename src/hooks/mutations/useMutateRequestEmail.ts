import { requestEmailFn } from "@/api/services/requestEmail";
import { IRequestEmail } from "@/api/types";
import { useMutation } from "@tanstack/react-query";

export const useMutateAuth = () => {
  return {
    requestEmail: useMutation({
      mutationFn: async (credentials: IRequestEmail) => await requestEmailFn(credentials),
    }),
  };
};
