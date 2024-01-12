import { registerFn } from "@/api/services/users";
import { IRegisterData } from "@/api/types";
import { useMutation } from "@tanstack/react-query";

export const useMutateRegister = () => {
  return {
    register: useMutation({
      mutationFn: async (credentials: IRegisterData) => await registerFn(credentials),
    }),
  };
};
