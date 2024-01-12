import img1 from "../../assets/imgAuth.png";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../components/molecules";
import Button from "../../components/molecules/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/api/validation/validationData";
import { IRegisterData } from "@/api/types";
import { useMutateRegister } from "@/hooks/mutations/useMutateRegister";

export default function RegisterPage() {
  const methods = useForm<IRegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const register = useMutateRegister().register;
  const onHandleSubmit = async (data: IRegisterData) => {
    await register.mutateAsync(data);
  };

  register.isSuccess && console.log(register.data);

  register.isError && console.log((register.error as any).response.data);

  return (
    <div>
      <img src={img1} alt="" className="w-full" />

      <div className="px-6 py-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Buat Akun</h1>
        <p className="text-secondary font-extralight">Buat akun untuk memulai</p>
        <div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onHandleSubmit)}>
              <div>
                <Input name="name" label="Nama" placeholder="Masukkan nama lengkap anda" type="text" />
                {methods.formState.errors.name && <p>{methods.formState.errors.name.message}</p>}
              </div>
              <div>
                <Input name="email" label="Email" placeholder="Masukkan email anda" type="email" />
                {methods.formState.errors.email && <p>{methods.formState.errors.email.message}</p>}
              </div>
              <div>
                <Input name="password" label="Password" placeholder="Masukkan password anda" type="password" />
                {methods.formState.errors.password && <p>{methods.formState.errors.password.message}</p>}
              </div>
              <div>
                <Input name="confirmPassword" label="konfirmasi Password" placeholder="Masukkan konfirmasi Password anda" type="password" />
                {methods.formState.errors.confirmPassword && <h1>{methods.formState.errors.confirmPassword.message}</h1>}
              </div>
              <div className="mt-10 flex flex-col gap-4">
                <Button type="submit" className="bg-primary w-full py-2 rounded text-white">
                  Buat Akun
                </Button>
                <Button type="button" className="bg-[#0F172A] w-full py-2 rounded text-white">
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
