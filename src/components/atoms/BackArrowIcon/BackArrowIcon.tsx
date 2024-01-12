import { ChevronLeft } from "lucide-react";

export default function BackArrowIcon() {
  return (
    <div className="flex bg-[#475569] rounded-full text-white cursor-pointer">
        <div className="flex justify-center items-center p-1">
            <ChevronLeft size={25} />
        </div>
    </div>
  )
}
