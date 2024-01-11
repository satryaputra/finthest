import SmallCard from "@/components/molecules/SmallCard";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

export default function MainCard() {
    return(
        <div className="w-full h-[27rem] flex flex-col bg-white rounded-3xl shadow-[0px_0px_1px_#0000000a,0px_2px_6px_#0000000a,0px_16px_24px_#0000000f]">
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
                <Separator className="mt-5"/>
            </div>
        </div>
    );
};