import { Plus } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CalculationCard, SmallCard } from "@/components/molecules";
import ProfilePicture from "../../assets/ProfilePicture.svg";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col px-7">
      <div className="w-full flex items-center space-x-3 mt-6">
        <img src={ProfilePicture} alt="" className="w-14 h-14" />
        <p className="font-semibold text-lg">Eka Budiono Putra Siregar</p>
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <div className="w-full h-[29.5rem] flex flex-col bg-white rounded-3xl shadow-[0px_0px_1px_#0000000a,0px_2px_6px_#0000000a,0px_16px_24px_#0000000f]">
          <div className="flex flex-col px-5 mt-5">
            <div className="flex space-x-2 items-center">
              <p className="font-medium text-lg">Wish List</p>
              <div className="bg-[#FFC145] rounded-full p-1 cursor-pointer">
                <Plus size={12} />
              </div>
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
                <span className="font-bold text-2xl text-[#408FFF]">
                  Rp. 5.000.000
                </span>
              </div>
              <div className="flex flex-col ">
                <p className="font-normal text-sm text-[#AEAEAE]">
                  Jumlah tabungan
                </p>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-xl text-[#439A86]">
                    Rp. 3.000.000
                  </span>
                  <div className="bg-[#FFC145] rounded-full p-1 cursor-pointer">
                    <Plus size={12} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <p className="font-normal text-sm text-[#AEAEAE]">
                  Jumlah pinjaman
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold items-center text-xl text-[#BB4430]">
                    Rp. 2.220.000
                  </span>
                  <div className="flex flex-col gap-2">
                    <p className="font-medium text-xs">Rp. 900rb / Rp. 2.2jt</p>
                    <Progress
                      value={40}
                      className="w-[10rem] h-[.60rem]"
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
