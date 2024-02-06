import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { Input as _Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "@/components/molecules";
import { Button as SButton } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FormField } from "@/components/molecules";
import { AlertCircle } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

import useLogin from "@/api/services/auth/useLogin";
import img1 from "../../assets/imgAuth.png";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email tidak boleh kosong")
    .email("Alamat email tidak valid"),
  password: z
    .string()
    .min(1, "Password tidak boleh kosong")
    .min(8, "Password harus 8 karakter atau lebih"),
});

export default function LoginPage() {
  const methods = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = useLogin();

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    await login.mutateAsync(data);
  };

  return (
    <div>
      <img src={img1} alt="" className="w-full" />

      <div className="px-6 py-6 flex flex-col gap-2">
        <h1 className="text-neutral-950 text-2xl font-semibold">
          Selamat datang di Finthest
        </h1>
        <p className="text-sm">
          Belum punya akun?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Daftar
          </Link>
        </p>
        <SButton
          asChild
          variant="outline"
          className="!border-2 !py-5 cursor-pointer mt-2"
        >
          <div className="flex gap-2 font-semibold">
            <img src="/icons/google.svg" alt="ikon google" className="h-5" />
            <p>Daftar dengan Google</p>
          </div>
        </SButton>
        <div className="flex justify-between items-center text-xs mt-2">
          <Separator className="w-[45%]" />
          or
          <Separator className="w-[45%]" />
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
          >
            <FormField name="email" label="Alamat Email" />
            <FormField name="password" type="password" label="Kata sandi" />
            {login.isError && (
              <Alert variant="destructive" className="my-3 !py-[.8rem]">
                <AlertCircle className="!top-1/2 h-4 w-4 !-translate-y-1/2 !absolute" />
                <AlertTitle className="!mb-0">
                  {(login.error as any)?.response?.data?.message}
                </AlertTitle>
              </Alert>
            )}
            <Link
              to="/forgot-password"
              className="text-end text-sm mt-3 text-secondary underline pr-1"
            >
              {" "}
              Lupa kata sandi?
            </Link>
            <Button
              type="submit"
              className="w-full mt-4"
              isLoading={login.isPending}
            >
              Masuk
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
