import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "@/components/molecules";
import { Button } from "@/components/molecules";
import { Button as SButton } from "@/components/ui/button";
import { isObjectEmpty } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { type SignupSchemaType, signupSchema } from "./signupSchema";

import useSignup from "@/api/services/auth/useSignup";
import img1 from "../../assets/imgAuth.png";

export default function SignupPage() {
  const methods = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signup = useSignup();

  const onSubmit = async ({ confirmPassword, ...data }: SignupSchemaType) => {
    await signup.mutateAsync(data);
  };

  return (
    <div>
      <img src={img1} alt="" className="w-full" />

      <div className="px-6 py-6 flex flex-col gap-2">
        <h1 className="text-neutral-950 text-2xl font-semibold">
          Selamat datang di Finthest
        </h1>
        <p className="text-sm">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Masuk
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
            <FormField name="name" label="Nama lengkap" />
            <FormField name="email" label="Alamat email" />
            <FormField name="password" type="password" label="Kata sandi" />
            <FormField
              name="confirmPassword"
              type="password"
              label="Konfirmasi kata sandi"
            />
            <Button
              type="submit"
              className="w-full mt-4"
              disabled={!isObjectEmpty(methods.formState.errors)}
              isLoading={signup.isPending}
            >
              Daftar
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
