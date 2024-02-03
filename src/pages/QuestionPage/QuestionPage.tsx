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
import { yearsPlan } from "../../lib/data";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function QuestionPage() {
  const metodth = useForm();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [year, setYear] = React.useState("");

  const [loanValue, setLoanValue] = React.useState("false");
  const [travelingValue, setTravelingValue] = React.useState("false");
  const [wishValue, setWishValue] = React.useState("false");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "loan") {
      setLoanValue(value); 
    } else if (name === "traveling") {
      setTravelingValue(value);
    } else if (name === "wish") {
      setWishValue(value);
    }
  }
  const id = 1;
  const {mutate} = useMutation({
    mutationFn: async () =>{
      const {salary,loan,month,savingMoney,wish,price} = metodth.getValues();
      const loginResponse = await axios.post(`http://localhost:8000/api/calculation${id}`,{
        salary,loan,month,savingMoney,wish,price,year
      })
      return loginResponse;
    },
    onSuccess : (data) => {
      console.log(data);
      console.log("Success");
      navigate("/dashboard");
    },
    // onError : (error: ErrorResponse) => {
    //   const errorMessage = error.response.data.message;
    //   alert(errorMessage);
    // }
    onError : (error) => {
      console.log(error);
    }
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    mutate();
    const {salary,loan,month,savingMoney,wish,price} = metodth.getValues();
    console.log(salary,loan,month,savingMoney,wish,year,price);
  };

  return (
    <div>
      <img src={img1} alt="" className="w-full" />
      <div className="px-6 py-4 overflow-y-hidden">
        <h1 className="text-lg font-normal mb-5">Silahkan isi beberapa pertanyaan berikut ini</h1>
        <div className="w-full h-[24rem] overflow-y-auto border-t-2">
          <FormProvider {...metodth}>
            <form action="" className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
              <div>
                <Input name="salary" label="*Berapa gaji anda per bulan?" placeholder="Gaji per bulan" type="text" />
              </div>
              <div>
                <h1 className="">*Apakah anda mempunyai pinjaman?</h1>
                <div className="flex items-center gap-4">
                  <RadioGroup defaultValue="false" name="loan" onChange={handleRadioChange}>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="true" id="r1" />
                      <label htmlFor="r1">Ya</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="false" id="r2" />
                      <label htmlFor="r2">Tidak</label>
                    </div>
                  </RadioGroup>
                  {loanValue === "true" && (
                    <div className="w-full">
                      <Input name="loan" placeholder="Jumlah pinjaman" type="text" />
                    </div>
                  )}
                </div>
                  {loanValue === "true" && (
                    <div className="">
                      <Input name="month" placeholder="Eetimasi Tanggal Lunas" type="text" />
                    </div>
                  )}
              </div>
              <div>
                <Input name="savingMoney" label="*Berapa jumlah tabungan sebelumnya?" placeholder="Jumlah tabungan" type="text" />
              </div>
              <div>
                <h1 className="">*Adakah rencana anda ingin traveling?</h1>
                <div className="flex items-center gap-4">
                  <RadioGroup defaultValue="false" name="traveling" onChange={handleRadioChange}>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="true" id="r1" />
                      <label htmlFor="r1">Ya</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="false" id="r2" />
                      <label htmlFor="r2">Tidak</label>
                    </div>
                  </RadioGroup>
                  {travelingValue === "true" && (
                  <div className="mb-8 w-full">
                    <Input name="traveling" placeholder="Jumlah tabungan" type="text" />
                  </div>
                  )}
                </div>
              </div>
              <div>
                <h1 className="">*Apakah anda mempunyai Wish List?</h1>
                <div className="flex items-center gap-4">
                  <RadioGroup defaultValue="false" name="wish" onChange={handleRadioChange}>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="true" id="r1" />
                      <label htmlFor="r1">Ya. ada</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="false" id="r2" />
                      <label htmlFor="r2">Tidak ada</label>
                    </div>
                  </RadioGroup>
                  {wishValue === "true" && (
                  <div className="mb-8 w-full">
                    <Input name="wish" placeholder="Tuliskan wishlist anda" type="text" />
                  </div>
                  )}
                </div>
                {wishValue === "true" && (
                <div className="mt-5">
                  <h1 className="mb-2">*Target Wish List</h1>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                        {year ? yearsPlan.find((yearsPlan) => yearsPlan.value === year)?.label : "Tahun"}
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
                                setYear(currentValue === year ? "" : currentValue);
                                setOpen(false);
                              }}
                            >
                              <Check className={cn("mr-2 h-4 w-4", year === yearsPlan.value ? "opacity-100" : "opacity-0")} />
                              {yearsPlan.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
                )}
              </div>
              {wishValue === "true" && (
                <div className="mb-8">
                  <Input name="price" label="*Budget" placeholder="Tuliskan harga dari wishlist anda" type="text" />
                </div>
              )}
              <div className="absolute bottom-0 w-[93%] pr-6 ">
                <Button type="submit" className="bg-primary py-2 rounded w-full text-white text-lg">
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
