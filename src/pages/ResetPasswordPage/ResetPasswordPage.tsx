import img1 from "../../assets/imgAuth.png";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../components/molecules";
import { Input } from "@/components/ui/input";

export default function ResetPasswordPage() {
  const metodth = useForm();
  return (
    <div>
      <img src={img1} alt="" className="w-full" />

      <div className="px-6 py-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Reset Password</h1>
        <p className="text-secondary font-extralight">
          Buat password yang unik serta rumit dari sebelumnya!
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
                  placeholder="Masukkan Password Baru"
                  type="password"
                />
              </div>
              <div>
                <Input
                  name="confirmPassword"
                  placeholder="Masukkan Konfirmasi Password Baru"
                  type="password"
                />
              </div>
              <p className="text-end"></p>
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
        <div className="text-center mt-10"></div>
      </div>
    </div>
  );
}
