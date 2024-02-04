import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { Input as _Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "@/components/molecules";
import { FormField } from "@/components/molecules";
import useLogin from "@/api/services/auth/useLogin";
import img1 from "../../assets/imgAuth.png";

const formSchema = z.object({
  email: z.string().min(1, "Email diperlukan").email("Email tidak valid"),
  password: z
    .string()
    .min(1, "Password diperlukan")
    .min(8, "Password harus 8 karakter atau lebih"),
});

export default function LoginPage() {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = useLogin();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await login.mutateAsync(data);
  }

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
            <Button
              type="submit"
              className="w-full mt-4"
              isLoading={login.isPending}
            >
              Submit
            </Button>
          </form>
        </FormProvider>
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
