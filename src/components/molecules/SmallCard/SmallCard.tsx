import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
export default function SmallCard() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="w-full h-[7rem] rounded-3xl [background:linear-gradient(180deg,rgb(66.83,218.88,41.95)_0%,rgb(80.84,172.13,65.98)_100%)]">
                <CardContent className="w-full h-full flex flex-col bg-[url('/src/assets/ImageCard.svg')]">
                  <div className="flex h-full flex-col mt-3 gap-3">
                    <p className="font-bold text-white text-xl ">Beli Motor</p>
                    <Progress
                      value={33}
                      className="h-[.60rem]"
                      indicatorClassName="bg-blue-400"
                    />
                    <div className="flex justify-between text-white text-sm">
                      <p className="font-light sm:text-sm">Target</p>
                      <span className="font-medium sm:text-sm">
                        Rp. 900rb/Rp. 10jt
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
