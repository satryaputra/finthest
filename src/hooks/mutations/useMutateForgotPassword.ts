import { forgotPasswordFn } from "@/api/services/forgotPassword";
import { IForgotPassword } from "@/api/types";
import { useMutation } from "@tanstack/react-query";

export const useMutateAuth = () => {
  return {
    forgotPassword: useMutation({
      mutationFn: async (credentials: IForgotPassword) => await forgotPasswordFn(credentials),
    }),
  };
};
