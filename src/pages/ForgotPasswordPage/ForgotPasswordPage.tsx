import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, FormField } from "@/components/molecules";
import img1 from "../../assets/imgAuth.png";

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email tidak boleh kosong")
    .email("Alamat email tidak valid"),
});

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const methods = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
    console.log(data);
  };
  return (
    <div>
      <img src={img1} alt="" className="w-full" />

      <div className="px-6 py-6 flex flex-col gap-2">
        <h1 className="text-neutral-950 text-2xl font-semibold">
          Selamat datang di Finthest
        </h1>
        <p className="text-sm">
          Masukan alamat email yang telah terdaftar menerima email reset kata
          sandi.
        </p>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="mt-2"
          >
            <FormField name="email" label="Alamat Email" />
            {/* {login.isError && (
              <Alert variant="destructive" className="my-3 !py-[.8rem]">
                <AlertCircle className="!top-1/2 h-4 w-4 !-translate-y-1/2 !absolute" />
                <AlertTitle className="!mb-0">
                  {(login.error as any)?.response?.data?.message}
                </AlertTitle>
              </Alert>
            )} */}
            <Button
              type="submit"
              className="w-full mt-8"
              // isLoading={login.isPending}
            >
              Kirim
            </Button>
            <p
              className="underline text-sm text-center mt-4 text-blue-500 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Kembali
            </p>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
