import React from 'react'
import { Link, } from 'react-router-dom';
import img1 from '../../assets/homePage.png'
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../components/molecules";
import { Camera } from 'lucide-react';
import { IconCircleArrowLeftFilled } from '@tabler/icons-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// interface def {
//   company: string,
//   email: string,
//   name: string,
//   ename: string,
//   contact: number,
// }

export default function UpdateProfilePage() {
  const metodth = useForm();

  const [imagePreview, setImagePreview] = React.useState<string | null>(null);

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const data = metodth.getValues();
  //   // const {name,email,password} = data;
  //   // console.log("Email",email);
  //   // console.log("Password",password);
  //   const url = 'https://reqres.in/api/register';
  //   try {
  //     const response = await postData(url, data);
  //     console.log('API Post Response:', response);
  //     // alert("Register Success");
  //   } catch (error) {
  //     console.error('API Post Error:', error);
  //     // alert(error);
  //   }
  // };

  // const navigate = useNavigate();
  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  const company = "UT";
  const email = "ut@gmail.com";
  const name = "ashif";
  const ename = "annafi";
  const contact = "09878888";

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between top-0 px-4 relative z-10">
          <div className="flex items-center">
            <Link to="/profile">
              <IconCircleArrowLeftFilled className="text-black text-xl" />
            </Link>
          </div>
          <div className="flex-grow text-center">
            <h1 className="text-2xl font-semibold pt-10 mb-10">Edit Profile</h1>
          </div>
        </div>

        <div className="flex items-center justify-center relative top-6">
          <div className="w-32 h-32 rounded-full overflow-hidden position-relative">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={img1}
                alt="Foto"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="absolute bottom-0 ml-20 ">
            <label htmlFor="imageInput">
              <Camera className=" bg-primary p-1 rounded-full w-10 h-10 border-4 border-white" />
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImagePreview(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              hidden
            />
          </div>
        </div>

        <div className="mt-20 mb-32 mx-3">
          {/* <FormProvider {...metodth}>
            <form
            // onSubmit={handleSubmit}
            >
              <div>
                <Input
                  name="company"
                  defaultValue={company}
                  type="text"
                />
              </div>
              <div>
                <Input
                  name="email"
                  defaultValue={email}
                  type="email"
                />
              </div>
              <div>
                <Input
                  name="name"
                  defaultValue={name}
                  type="text"
                />
              </div>
              <div>
                <Input
                  name="nickname"
                  defaultValue={ename}
                  type="text"
                />
              </div>
              <div>
                <Input
                  name="contact"
                  defaultValue={contact}
                  type="number"
                />
              </div>
              <div className="mt-10 mb-10 flex flex-col gap-4">
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='text-white '>Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="w-4/5 h-48 rounded">
                  <DialogHeader className='text-start'>
                    <DialogTitle className='text-sm'>Apa anda yakin ingin update profile?</DialogTitle>
                    <DialogDescription className='text-sm'>
                      Dengan ini anda menyetujui untuk update profile
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <div className='flex justify-end items-end gap-4'>
                      <Button type="submit" className='text-xs w-16 py-1 px-5 bg-white text-black border-slate-400'>Batal</Button>
                      <Button type="submit" className='text-xs w-16 py-1'>Simpan</Button>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

            </form>
          </FormProvider> */}
        </div>
      </div>
    </>
  );
}
