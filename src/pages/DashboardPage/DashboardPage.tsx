import { Plus } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Button,
  CalculationCard,
  FormField,
  SmallCard,
} from "@/components/molecules";
import ProfilePicture from "../../assets/ProfilePicture.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormProvider, useForm } from "react-hook-form";

export default function DashboardPage() {
  const navigate = useNavigate();

  const methods = useForm();

  const onSubmitHandler = (data: any) => {
    console.log(data);
  };
  const onSubmitEdit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full flex flex-col px-7">
      <div className="w-full flex items-center space-x-3 mt-6">
        <Link to={"/profile"}>
          <img src={ProfilePicture} alt="" className="sm:w-14 w-10" />
        </Link>
        <p className="font-semibold text-sm sm:text-lg">
          Eka Budiono Putra Siregar
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <div className="w-full h-[29.5rem] flex flex-col bg-white rounded-3xl shadow-[0px_0px_1px_#0000000a,0px_2px_6px_#0000000a,0px_16px_24px_#0000000f]">
          <div className="flex flex-col px-5 mt-5">
            <div className="flex space-x-2 items-center">
              <p className="font-medium text-lg">Wish List</p>
              <Dialog>
                <DialogTrigger
                  asChild
                  className="bg-[#FFC145] rounded-full p-1 cursor-pointer"
                >
                  <div>
                    <Plus size={12} />
                  </div>
                </DialogTrigger>
                <DialogContent className="w-96 h-[26rem]">
                  <DialogHeader className="">
                    <DialogDescription className="text-lg">
                      Anda bisa menambahkan wish list yang lain disini.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="items-center">
                    <FormProvider {...methods}>
                      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
                        <div className="w-full">
                          <FormField
                            name="judul"
                            label="Judul"
                            placeholder="Judul"
                            className="text-sm "
                          />
                        </div>
                        <FormField
                          name="target"
                          label="Target"
                          placeholder="Target"
                          className="text-sm "
                        />
                        <DialogFooter className="mt-10">
                          <div className="w-full grid ">
                            <Button type="submit" className="py-6 text-xl">
                              Simpan
                            </Button>
                          </div>
                        </DialogFooter>
                      </form>
                    </FormProvider>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex flex-col mt-5 px-8 items-center justify-center">
              <SmallCard />
            </div>
            <Separator className="mt-5" />
            <div className="flex flex-col gap-4">
              <h1 className="font-medium text-lg mt-3">Informasi</h1>
              <div className="flex flex-col ">
                <p className="font-normal text-sm text-[#AEAEAE]">
                  Gaji Per bulan
                </p>
                <span className="font-bold text-xl sm:text-2xl text-[#408FFF]">
                  Rp. 5.000.000
                </span>
              </div>
              <div className="flex flex-col ">
                <p className="font-normal text-sm text-[#AEAEAE]">
                  Jumlah tabungan
                </p>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-lg sm:text-xl text-[#439A86]">
                    Rp. 3.000.000
                  </span>
                  <Dialog>
                    <DialogTrigger className="bg-[#FFC145] rounded-full p-1 cursor-pointer">
                      <Plus size={12} />
                    </DialogTrigger>
                    <DialogContent className="w-96 h-[26rem]">
                      <DialogDescription className="text-lg">
                        Edit jumlah tabungan dari sebelumnya jika ada melakukan
                        penabungan uang hari ini.
                      </DialogDescription>
                      <div className="items-center">
                        <FormProvider {...methods}>
                          <form
                            onSubmit={methods.handleSubmit(onSubmitEdit)}
                          >
                            <div className="w-full">
                              <FormField
                                name="uang"
                                label="Edit Jumlah Tabungan"
                                placeholder="Jumblah"
                                className="text-sm "
                              />
                            </div>
                            <DialogFooter className="mt-10">
                              <div className="w-full grid ">
                                <Button type="submit" className="py-6 text-xl">
                                  Simpan
                                </Button>
                              </div>
                            </DialogFooter>
                          </form>
                        </FormProvider>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="flex flex-col ">
                <p className="font-normal text-sm text-[#AEAEAE]">
                  Jumlah pinjaman
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold items-center text-md sm:text-xl text-[#BB4430]">
                    Rp. 2.220.000
                  </span>
                  <div className="flex flex-col gap-2">
                    <p className="font-medium text-[10px] sm:text-xs">
                      Rp. 900rb / Rp. 2.2jt
                    </p>
                    <Progress
                      value={40}
                      className="sm:w-[10rem] sm:h-[.60rem]"
                      indicatorClassName="[background:linear-gradient(180deg,rgb(32,157,67)_0%,rgb(42.94,194.44,85.36)_100%)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mt-3 mb-20">
        <div className="flex justify-between px-5">
          <p className="font-medium text-lg">Hasil Kalkulasi</p>
          <span
            className="font-medium text-sm text-[#408FFF] cursor-pointer"
            onClick={() => navigate("/dashboard/all-calculation")}
          >
            Lihat Semua
          </span>
        </div>
        <div className="w-full flex pl-5 gap-3 mt-3">
          <CalculationCard />
        </div>
      </div>
      <div>
        <h1>test</h1>
      </div>
    </div>
  );
}
