import { ShoppingCart, Wallet2 } from 'lucide-react'
import ProfilePicture from "../../assets/ProfilePicture.svg";
import MainCard from '@/components/organism/MainCard';

export default function DashboardPage() {
  return (
    <div className="w-full flex flex-col px-7">
      <div className="w-full flex items-center space-x-3 mt-10">
        <img src={ProfilePicture} alt="" className="w-14 h-14"/>
        <p className="font-semibold text-lg">Eka Budiono Putra Siregar</p>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <MainCard />
      </div>
      
    </div>
  );
}
