import React from "react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgShowFeatures from "/images/bg-show-features.png";
import imgcalculator from "../../assets/imgcalculator.png";
import imguser from "../../assets/imguser.png";
import imgdefense from "../../assets/imgdefense.png";
import { ChevronsDown } from "lucide-react";

export default function FeaturesPage() {
  const navigate = useNavigate();
  const [isAnimating, setAnimating] = React.useState(false);

  const handleSkipClick = () => {
    setAnimating(true);
    setTimeout(() => {
      navigate("/article");
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={isAnimating ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={bgShowFeatures}
        alt="background show features"
        className="w-full"
      />
      <div className="w-96 px-10">
        <h4 className="font-semibold text-[25px]">
          Fitur yang disediakan Finplan
        </h4>
      </div>
      <div className="px-10 flex flex-col items-center">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <img src={imgcalculator} alt="calculator" />
            <div>
              <h1 className="font-md font-semibold text-slate-600">
                Manajemen Anggaran
              </h1>
              <h2 className="text-[15px] text-slate-600">
                Menghitung total pemasukan dan pengeluaran bersih anda
              </h2>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <h1 className="font-md font-semibold text-slate-600">
                Pengingat
              </h1>
              <h2 className="text-[15px] text-slate-600">
                Memberitahu atau mengingatkan anda mengenai pembayaran tagihan
                maupun target keuangan{" "}
              </h2>
            </div>
            <img src={imguser} alt="calculator" className="w-20 h-16" />
          </div>
          <div className="flex gap-4">
            <img src={imgdefense} alt="calculator" className="w-20 h-16" />
            <div>
              <h1 className="font-md font-semibold text-slate-600">
                Manajemen Anggaran
              </h1>
              <h2 className="text-[15px] text-slate-600">
                Menjamin keamanan dan enkripsi untuk melindungi informasi
                keuangan anda.
              </h2>
            </div>
          </div>
        </div>
        <ChevronsDown
          size={35}
          onClick={handleSkipClick}
          className="text-green-600"
        />
      </div>
    </motion.div>
  );
}
