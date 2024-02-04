import img1 from "../../assets/imgAuth.png";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input as _Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import type { ICredentials } from "@/api/types";
import FormField from "@/components/molecules/FormField/FormField";
import useLogin from "@/api/services/auth/useLogin";

const formSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(2, "Minimal 2"),
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

  const onHandleSubmit = async (data: ICredentials) => {
    await login.mutateAsync(data);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(JSON.stringify(values));
  }

  return (
    <div>
      <img src={img1} alt="" className="w-full" />

      <div className="px-6 py-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Masuk</h1>
        <p className="text-secondary font-extralight">
          Selamat datang kembali! senang melihatmu disini.
        </p>
        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-3">
            <FormField name="email" label="Email" placeholder="Email" />
            <FormField
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
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
