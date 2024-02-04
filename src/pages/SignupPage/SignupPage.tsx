import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "@/components/molecules";
import { Button } from "@/components/molecules";
import { Button as SButton } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useSignup from "@/api/services/auth/useSignup";
import img1 from "../../assets/imgAuth.png";

const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nama diperlukan")
      .min(3, "Nama harus 3 karakter atau lebih"),
    email: z.string().min(1, "Email diperlukan").email("Email tidak valid"),
    password: z
      .string()
      .min(1, "Password diperlukan")
      .min(8, "Password harus 8 karakter atau lebih"),
    confirmPassword: z.string().min(1, "Konfirmasi password diperlukan"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Konfirmasi password tidak sesuai dengan password",
    path: ["confirmPassword"],
  });

export default function SignupPage() {
  const navigate = useNavigate();

  const methods = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signup = useSignup();

  const onSubmit = async ({
    confirmPassword,
    ...data
  }: z.infer<typeof signupSchema>) => {
    // await signup.mutateAsync(data);
    console.log(data);
  };

  return (
    <div>
      <img src={img1} alt="" className="w-full" />

      <div className="px-6 py-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Buat Akun</h1>
        <p className="text-secondary font-extralight">
          Buat akun untuk memulai
        </p>
        <div>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col gap-1"
            >
              <FormField name="name" label="Nama" placeholder="Nama" />
              <FormField name="email" label="Email" placeholder="Email" />
              <FormField
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
              />
              <FormField
                name="confirmPassword"
                type="password"
                label="Konfirmasi Password"
                placeholder="Konfirmasi Password"
              />
              <Button
                type="submit"
                className="w-full mt-4"
                isLoading={signup.isPending}
              >
                Daftar
              </Button>
              <Separator className="my-2" />
              <SButton
                type="button"
                className="w-full"
                onClick={() => navigate("/login")}
              >
                Masuk
              </SButton>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
