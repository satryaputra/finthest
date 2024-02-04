import img1 from "../../assets/imgAuth.png";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Button from "@/components/molecules/Button";

export default function ForgotPasswordRequestPage() {
  const metodth = useForm();
  return (
    <div>
      <img src={img1} alt="" className="w-full" />

      <div className="px-6 py-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Request Kode</h1>
        <p className="text-secondary font-extralight">
          Jangan khawatir! kami akan mengirimkan kode ke email anda.
        </p>
        <div>
          <FormProvider {...metodth}>
            <form
              onSubmit={metodth.handleSubmit((data) => {
                console.log(data);
              })}
            >
              <div>
                <Input
                  name="email"
                  placeholder="Input your email"
                  type="email"
                />
              </div>
              <div className="mt-10 flex flex-col gap-4">
                <Button
                  type="submit"
                  className="bg-primary w-full py-2 rounded text-white"
                >
                  Kirim Kode
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
        <div className="mt-10">
          <p className="flex justify-center gap-2 text-secondary">
            Ingat Password?
            <Link to="/login" className="text-blue-500 font-bold">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
