import { Link, useNavigate } from 'react-router-dom';
import {  IconCircleArrowLeftFilled, IconEdit } from '@tabler/icons-react';
import imgPP from '../../assets/pp.jpg';
// import imgPP from '../../assets/homePage.png'
import imgBG from '../../assets/background.png';

export default function ProfilePage() {
  const navigate = useNavigate();

  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  const handleEditProfile = () => {
    navigate('/update-profile');
  };

  const Nama = "Eka Budiono Putra Siregar";
  const Email = "ekasiregar@gmail.com";
  const Company = "UT School";
  const Contact = "+62 893523414";

  return (
    <>
      <div className="flex flex-col w-full" >
        <div className="flex items-center justify-between top-0 px-4 relative z-10">
          <Link to="/dashboard">
            <IconCircleArrowLeftFilled className="text-black text-xl" />
          </Link>
          <div className="flex-grow text-center">
            <h1 className="text-center text-2xl text-white font-semibold pt-10 mb-10">Profile</h1>
          </div>
          <Link to="/update-profile">
            <IconEdit className="text-white text-xl" />
          </Link>
        </div>

        <img src={imgBG} alt="" className="absolute top-0 w-full -z-0" />

        <div className="top-10 ml-6 flex items-center justify-center relative z-50">
          <div className="order-1">
            <div className="font-semibold text-lg text-white">{Nama}</div>
            <div className="text-right text-base text-white">{Email}</div>
          </div>
          <div className="order-2 rounded-full bg-white w-28 h-28 mr-2 overflow-hidden ml-2">
            <img src={imgPP} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="mt-32 flex items-center justify-center">
          <div className="bg-white-100 p-8 w-full">

            <div className="flex items-center mb-6">
              <div className="flex flex-col w-full">
                <div className="text-lg font-normal mb-0">Instansi Perusahaan</div>
                <div className="px-3 py-1 text-lg font-semibold mb-2 w-full border border-gray-300 rounded-md d-flex justify-content-between">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {Company}
                    <IconEdit onClick={handleEditProfile} style={{ color: 'blue', marginLeft: 'auto', cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex flex-col w-full">
                <div className="text-lg font-normal mb-0">Nama</div>
                <div className="px-3 py-1 text-lg font-semibold mb-2 w-full border border-gray-300 rounded-md">{Nama}</div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex flex-col w-full">
                <div className="text-lg font-normal mb-0">Alamat Email</div>
                <div className="px-3 py-1 text-lg font-semibold mb-2 w-full border border-gray-300 rounded-md">{Email}</div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex flex-col w-full">
                <div className="text-lg font-normal mb-0">Kontak</div>
                <div className="px-3 py-1 text-lg font-semibold mb-2 w-full border border-gray-300 rounded-md d-flex justify-content-between">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {Contact}
                    <IconEdit onClick={handleEditProfile} style={{ color: 'blue', marginLeft: 'auto', cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
