import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/molecules";
import { Separator } from "@/components/ui/separator";
import { FormField } from "@/components/molecules";
import { Button as ButtonUI } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { loginSchema, type LoginSchemaType } from "./loginSchema";
import useLogin from "@/api/services/auth/useLogin";
import img1 from "../../assets/imgAuth.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = useLogin();

  const onSubmit = async (data: LoginSchemaType) => {
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
        <ButtonUI
          asChild
          variant="outline"
          className="!border-2 !py-5 cursor-pointer mt-2"
        >
          <div className="flex gap-2 font-semibold">
            <img src="/icons/google.svg" alt="ikon google" className="h-5" />
            <p>Masuk dengan Google</p>
          </div>
        </ButtonUI>
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
            {/* Alert error dari backend */}
            {login.isError && (
              <Alert variant="destructive" className="my-3 !py-3">
                <AlertTriangle className="!top-1/2 h-4 w-4 !-translate-y-1/2 !absolute" />
                <AlertTitle className="!mb-0 text-sm">
                  {(login.error as any)?.response?.data?.message.includes(
                    "belum terdaftar"
                  ) ? (
                    <p>
                      {(login.error as any)?.response?.data?.message}
                      {". "}
                      <span
                        className="hover:underline font-semibold cursor-pointer"
                        onClick={() => navigate("/signup")}
                      >
                        Daftar
                      </span>
                    </p>
                  ) : (
                    (login.error as any)?.response?.data?.message
                  )}
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
