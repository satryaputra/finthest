import { BackArrowIcon } from "@/components/atoms";
import { Card, CardContent } from "@/components/ui/card";
import { CardItem } from "@/lib/data";

export default function SeeAllCalculationPage() {
  return (
    <div className="w-full flex flex-col ">
      <div className="flex mt-10 items-center justify-center">
        <BackArrowIcon classname="w-10" />
        <h1 className="font-semibold text-2xl">Semua Kalkulasi</h1>
      </div>
      <div className="flex flex-wrap mt-10">
        {CardItem.map((item, index) => (
          <div
            key={index}
            className="pl-[0.85rem] sm:basis-1/2 flex justify-center "
          >
            <div className="p-1">
              <Card className="w-[11rem] sm:w-[11rem] h-[14rem] sm:h-[15rem] bg-white rounded-3xl shadow-[0px_0px_1px_#0000000a,0px_2px_6px_#0000000a,0px_16px_24px_#0000000f]">
                <CardContent className="flex flex-col p-5 gap-3">
                  <h1 className="font-semibold text-xl sm:text-2xl text-[#696969]">
                    Rp. {item.header}
                  </h1>
                  <p className="font-normal text-sm text-[#AEAEAE]">
                    {item.title}
                  </p>
                  <div className="flex flex-col mt-4 gap-4 ">
                    {item.icon}
                    <span className="font-normal text-lg sm:text-xl">
                      {item.text}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
