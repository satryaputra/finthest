import { loginFn } from "@/api/services/auth";
import { ICredentials } from "@/api/types";
import { useMutation } from "@tanstack/react-query";

export const useMutateAuth = () => {
  return {
    login: useMutation({
      mutationFn: async (credentials: ICredentials) => await loginFn(credentials),
    }),
  };
};
