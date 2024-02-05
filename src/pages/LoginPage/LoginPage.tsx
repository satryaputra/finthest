import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { Input as _Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "@/components/molecules";
import { FormField } from "@/components/molecules";
import { AlertCircle } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

import useLogin from "@/api/services/auth/useLogin";
import img1 from "../../assets/imgAuth.png";
import { isObjectEmpty } from "@/lib/utils";

const loginSchema = z.object({
  email: z.string().min(1, "Email diperlukan").email("Email tidak valid"),
  password: z
    .string()
    .min(1, "Password diperlukan")
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
        <h1 className="text-3xl font-semibold">Masuk</h1>
        <p className="text-secondary font-extralight">
          Selamat datang kembali! senang melihatmu disini.
        </p>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
          >
            <FormField name="email" label="Email" placeholder="Email" />
            <FormField
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
            />
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
              className="text-end font-semibold text-sm mt-3 text-secondary underline pr-1"
            >
              {" "}
              Lupa Password?
            </Link>
            <Button
              type="submit"
              className="w-full mt-4"
              disabled={!isObjectEmpty(methods.formState.errors)}
              isLoading={login.isPending}
            >
              Submit
            </Button>
          </form>
        </FormProvider>
        <div className="text-center text-sm mt-3">
          <p>
            Belum mempunyai akun?{" "}
            <Link to="/signup" className="text-blue-500 underline">
              Buat Akun
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
