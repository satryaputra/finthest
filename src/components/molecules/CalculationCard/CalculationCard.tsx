import { CreditCard, ShoppingCart, Wallet2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

export default function CalculationCard() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
      icon: <Wallet2 size={30} className="text-[#22B04A]" />,
      text: "Tabungan",
    },
    {
      header: "200rb",
      title: "Untuk hutang",
      icon: <CreditCard size={30} className="text-[#F0B621]" />,
      text: "Hutang",
    },
    {
      header: "200rb",
      title: "Untuk hutang",
      icon: <CreditCard size={30} className="text-[#F0B621]" />,
      text: "Hutang",
    },
  ];

  return (
    <main className="flex flex-col">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
        setApi={setApi}
      >
        <CarouselContent>
          {CardItem.map((item, index) => (
            <CarouselItem
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
                    <div className="flex flex-col mt-4 gap-4">
                      {item.icon}
                      <span className="font-normal text-lg sm:text-xl">
                        {item.text}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {current} dari {count}
      </div>
    </main>
  );
}
