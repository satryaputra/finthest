import img1 from "../../assets/imgAuth.png";

import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../components/molecules";
import Button from "../../components/molecules/Button";
import useRegister from "@/api/services/auth/useRegister";

type RegisterInput = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const methods = useForm<RegisterInput>();

  const register = useRegister();

  const onHandleSubmit = async ({
    confirmPassword,
    ...data
  }: RegisterInput) => {
    await register.mutateAsync(data);
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
            <form onSubmit={methods.handleSubmit(onHandleSubmit)}>
              <div>
                <Input
                  name="name"
                  label="Nama"
                  placeholder="Masukkan nama lengkap anda"
                  type="text"
                />
              </div>
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
              <div>
                <Input
                  name="confirmPassword"
                  label="konfirmasi Password"
                  placeholder="Masukkan konfirmasi Password anda"
                  type="password"
                />
              </div>
              <div className="mt-10 flex flex-col gap-4">
                <Button
                  type="submit"
                  className="bg-primary w-full py-2 rounded text-white"
                >
                  Buat Akun
                </Button>
                <Button
                  type="button"
                  className="bg-[#0F172A] w-full py-2 rounded text-white"
                >
                  Masuk
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
