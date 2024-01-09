import React from "react";
import { IconChevronsDown } from "@tabler/icons-react";
import imgInformationPage from '../../assets/informationPage.svg'
import imgGradientMobile from '../../assets/gradientMobile.svg'
import imgMandatory from '../../assets/Mandatory.svg'
import imgLock from '../../assets/Lock.svg'

export default function InformationPage() {
  return (
    <div className="w-full h-screen relative">
      <div className="relative">
        <div className="relative">
          <img src={imgInformationPage} alt="" />
          <img src={imgGradientMobile} alt="" className="absolute -bottom-1" />
        </div>
        <div className="px-6 flex flex-col gap-8">
          <h1 className="text-base text-secondary font-semibold">Fitur yang disediakan FinplanPRO</h1>
          <div className="flex ">
            <img src="/Calculator.svg" alt="" />
            <div>
              <h1 className="text-base text-secondary font-semibold">Manajemen Anggaran</h1>
              <p className="text-xs font-thin text-secondary">Menghitung total pemasukan dan pengeluaran bersih anda</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <h1 className="text-base text-secondary font-semibold">Pengingat</h1>
              <p className="text-xs font-thin text-secondary">Memberitahu atau mengingatkan anda mengenai pembayaran tagihan maupun target keuangan</p>
            </div>
            <img src={imgMandatory} alt="" />
          </div>
          <div className="flex">
            <img src={imgLock} alt="" />
            <div>
              <h1 className="text-base text-secondary font-semibold">Keamanan & Privasi</h1>
              <p className="text-xs font-thin text-secondary">Menjamin keamanan dan enkripsi untuk melindungi informasi keuangan anda.</p>
            </div>
          </div>
        </div>
        <IconChevronsDown className="absolute w-14 h-14 -bottom-14 left-1/2 transform -translate-x-1/2  text-primary" />
      </div>
    </div>
  );
}
