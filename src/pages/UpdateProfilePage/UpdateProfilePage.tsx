import React  from 'react'
import { Link, } from 'react-router-dom';
import img1 from '../../assets/homePage.png'
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../components/molecules";
import { Camera } from 'lucide-react';
import { IconCircleArrowLeftFilled } from '@tabler/icons-react';
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
      <div className="flex flex-col" >
        <div className="flex items-center justify-between top-0 px-4 relative z-10">
          <div className="flex items-center">
            <Link to="/profile" >
              <IconCircleArrowLeftFilled className="text-black text-xl" />
            </Link>
          </div>
          <div className="flex-grow text-center">
            <h1 className="text-2xl font-semibold pt-10 mb-10">Edit Profile</h1>
          </div>
        </div>


        <div className="flex items-center justify-center relative top-6">
          <div className='w-32 h-32 rounded-full overflow-hidden position-relative'>
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <img src={img1} alt="Foto" className="w-full h-full object-cover" />
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
          <FormProvider {...metodth}>
            <form
              // onSubmit={handleSubmit}
            >
              <div>
                <Input name="company" label="Company/ Branch" defaultValue={company} type="text" />
              </div>
              <div>
                <Input name="email" label="Email Address" defaultValue={email} type="email" />
              </div>
              <div>
                <Input name="name" label="Name" defaultValue={name} type="text" />
              </div>
              <div>
                <Input name="nickname" label="Nick Name" defaultValue={ename} type="text" />
              </div>
              <div>
                <Input name="contact" label="Emergency Contact" defaultValue={contact} type="number" />
              </div>
              <div className="mt-10 mb-10 flex flex-col gap-4">
                <button type="submit" className="bg-primary w-full py-2 rounded-full text-white ">
                  Update Profile
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  )
}