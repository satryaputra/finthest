import { Award, CreditCard, ShoppingCart, Wallet2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CalculationCard() {
  const CardItem = [
    {
      header: "1jt",
      title: "Untuk keperluan",
      icon: <ShoppingCart size={45} className="text-[#F8964C]" />,
      text: "Keperluan",
    },
    {
      header: "700rb",
      title: "Untuk di tabung",
      icon: <Wallet2 size={45} className="text-[#22B04A]" />,
      text: "Tabungan",
    },
    {
      header: "200rb",
      title: "Untuk hutang",
      icon: <CreditCard size={45} className="text-[#F0B621]" />,
      text: "Hutang",
    },
    {
      header: "900rb",
      title: "Untuk wish list",
      icon: <Award size={45} className="text-[#408FFF]" />,
      text: "Wish list",
    },
  ];

  return (
    <>
      <Carousel className="w-full max-w-sm">
        <CarouselContent className="-ml-1">
          {CardItem.map((item, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-48 lg:basis-48">
              <div className="p-1">
                <Card className="w-[11rem] h-[15rem] bg-white rounded-3xl shadow-[0px_0px_1px_#0000000a,0px_2px_6px_#0000000a,0px_16px_24px_#0000000f]">
                  <CardContent className="flex flex-col p-5 gap-3">
                    <h1 className="font-semibold text-2xl text-[#696969]">
                      Rp. {item.header}
                    </h1>
                    <p className="font-normal text-sm text-[#AEAEAE]">
                      {item.title}
                    </p>
                    <div className="flex flex-col mt-4 gap-4">
                      {item.icon}
                      <span className="font-normal text-xl">{item.text}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
