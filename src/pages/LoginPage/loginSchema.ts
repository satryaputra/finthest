import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email tidak boleh kosong")
    .email("Alamat email tidak valid"),
  password: z
    .string()
    .min(1, "Password tidak boleh kosong")
    .min(8, "Password harus 8 karakter atau lebih"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
