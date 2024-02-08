import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackArrowIcon({
  size = 18,
  classname,
}: {
  size?: string | number | undefined;
  classname?: string;
}) {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        "flex items-center justify-center p-1 bg-[#475569] rounded-full text-white cursor-pointer hover:ring-[5px] hover:ring-[#475569]/20 transition",
        classname
      )}
      onClick={() => {
        navigate(-1);
      }}
    >
      <ChevronLeft size={size} />
    </div>
  );
}
