import React from "react";
import img1 from "../../assets/imgAuth.png";
import { cn } from "../../lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../components/molecules";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { Button } from "../../components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../../components/ui/command";
import { yearsPlan } from "../../lib/data/index";


export default function QuestionPage() {
  const metodth = useForm();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div>
      <img src={img1} alt="" className="w-full" />
      <div className="px-6 py-4 overflow-y-hidden">
        <h1 className="text-lg font-normal mb-5">Silahkan isi beberapa pertanyaan berikut ini</h1>
        <div className="w-full h-[24rem] overflow-y-auto border-t-2">
          <FormProvider {...metodth}>
            <form action="" className="flex flex-col gap-4 mt-4">
              <div>
                <Input name="name" label="*Berapa gaji anda per bulan?" placeholder="Gaji per bulan" type="text" />
              </div>
              <div>
                <h1 className="">*Apakah anda mempunyai pinjaman?</h1>
                <div className="flex items-center gap-4">
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="default" id="r1" />
                      <label htmlFor="r1">Ya</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <label htmlFor="r2">Tidak</label>
                    </div>
                  </RadioGroup>
                  <div className="mb-8">
                    <Input name="name" placeholder="Jumlah tabungan" type="text" />
                  </div>
                </div>
              </div>
              <div>
                <Input name="name" label="*Berapa jumlah tabungan sebelumnya?" placeholder="Jumlah tabungan" type="text" />
              </div>
              <div>
                <h1 className="">*Adakah rencana anda ingin traveling?</h1>
                <div className="flex items-center gap-4">
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="default" id="r1" />
                      <label htmlFor="r1">Ya</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <label htmlFor="r2">Tidak</label>
                    </div>
                  </RadioGroup>
                  <div className="mb-8">
                    <Input name="name" placeholder="Jumlah tabungan" type="text" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="">*Apakah ada goals anda tahun ini? </h1>
                <div className="flex items-center gap-4">
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="default" id="r1" />
                      <label htmlFor="r1">Ya</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <label htmlFor="r2">Tidak</label>
                    </div>
                  </RadioGroup>
                  <div className="mb-8">
                    <Input name="name" placeholder="Nominal" type="text" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="">*Apakah anda mempunyai Wish List?</h1>
                <div className="flex items-center gap-4">
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="default" id="r1" />
                      <label htmlFor="r1">Ya. ada</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <label htmlFor="r2">Tidak ada</label>
                    </div>
                  </RadioGroup>
                  <div className="mb-8">
                    <Input name="name" placeholder="Tuliskan wishlist anda" type="text" />
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className="mb-2">*Target Wish List</h1>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                        {value ? yearsPlan.find((yearsPlan) => yearsPlan.value === value)?.label : "Tahun"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Tahun" />
                        <CommandEmpty>Tahun</CommandEmpty>
                        <CommandGroup>
                          {yearsPlan.map((yearsPlan) => (
                            <CommandItem
                              key={yearsPlan.value}
                              value={yearsPlan.value}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue);
                                setOpen(false);
                              }}
                            >
                              <Check className={cn("mr-2 h-4 w-4", value === yearsPlan.value ? "opacity-100" : "opacity-0")} />
                              {yearsPlan.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="mb-8">
                <Input name="name" label="*Budget" placeholder="Tuliskan harga dari wishlist anda" type="text" />
              </div>
              <div className="absolute bottom-0 w-[93%] pr-6 ">
                <Button type="button" className="bg-primary py-2 rounded w-full text-white text-lg">
                  Kalkulasi
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
