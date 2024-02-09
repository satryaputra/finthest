import { z } from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nama tidak boleh kosong")
      .min(3, "Nama harus memiliki 3 karakter"),
    email: z
      .string()
      .min(1, "Email tidak boleh kosong")
      .email("Alamat email tidak valid"),
    password: z
      .string()
      .min(1, "Kata sandi tidak boleh kosong")
      .min(8, "Kata sandi harus memiliki 8 karakter"),
    confirmPassword: z
      .string()
      .min(1, "Konfirmasi kata sandi tidak boleh kosong"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Konfirmasi kata sandi tidak sesuai",
    path: ["confirmPassword"],
  });

export type SignupSchemaType = z.infer<typeof signupSchema>;
