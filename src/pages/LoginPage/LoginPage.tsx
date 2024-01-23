import img1 from "../../assets/imgAuth.png";

import { FormProvider, useForm } from "react-hook-form";
import { Input, Button } from "@/components/molecules";
import { Link } from "react-router-dom";
import type { ICredentials } from "@/api/types";
import useLogin from "@/api/services/auth/useLogin";

export default function LoginPage() {
  const method = useForm<ICredentials>();
  const login = useLogin();

  const onHandleSubmit = async (data: ICredentials) => {
    await login.mutateAsync(data);
  };

  login.isSuccess && console.log(login.data);
  login.isError && console.log((login.error as any).response.data);

  return (
    <div>
      <img src={img1} alt="" className="w-full" />

      <div className="px-6 py-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Masuk</h1>
        <p className="text-secondary font-extralight">
          Selamat datang kembali! senang melihatmu disini.
        </p>
        <div>
          <FormProvider {...method}>
            <form onSubmit={method.handleSubmit(onHandleSubmit)}>
              <div>
                <Input
                  name="email"
                  label="Email"
                  placeholder="Masukkan email anda"
                  type="email"
                />
              </div>
              <div>
                <Input
                  name="password"
                  label="Password"
                  placeholder="Masukkan password anda"
                  type="password"
                />
              </div>
              <p className="text-end">
                <Link
                  to="/forgot-password"
                  className="text-secondary font-semibold text-sm "
                >
                  Lupa Password?
                </Link>
              </p>
              <div className="mt-10 flex flex-col gap-4">
                <Button
                  type="submit"
                  className="bg-primary w-full py-2 rounded text-white"
                >
                  Masuk
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
        <div className="text-center mt-10">
          <p>
            Belum mempunyai akun?
            <Link to="/register" className="text-blue-500">
              {" "}
              Buat Akun
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
