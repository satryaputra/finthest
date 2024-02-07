import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/molecules";
import bgStarting from "/images/bg-starting.png";

export default function GetStartedPage() {
  const navigate = useNavigate();

  return (
    <div>
      <img src={bgStarting} alt="background starting page" className="w-full" />

      <div className="p-5 px-10 flex flex-col gap-7 pb-20">
        <h1 className="text-dark text-5xl font-bold">
          Hallo, selamat datang di Finplan!
        </h1>
        <p className="text-secondary text-xl w-4/5">
          Sebelum mulai, baca artikel dari kami dulu yuk!
        </p>
        <Button className="group mt-4" onClick={() => navigate("/features")}>
          Lanjut
          <ArrowRight
            size={30}
            className="pl-2 -mr-4 group-hover:translate-x-1 transition"
          />
        </Button>
      </div>
    </div>
  );
}
