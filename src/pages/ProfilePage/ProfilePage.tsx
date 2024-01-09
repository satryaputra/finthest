import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IconPhoneCall, IconBuildingSkyscraper, IconUser, IconUserBolt, IconCircleArrowLeftFilled, IconEdit } from '@tabler/icons-react';
import imgPP from '../../assets/pp.jpg';
// import imgPP from '../../assets/homePage.png'
import imgBG from '../../assets/background.png';
import { Button } from '../../components/molecules';

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
  const NickName = "Putra";
  const EmergencyName = "Bambang Siregar";
  const EmergencyContact = "+62 893523414";

  return (
    <>
      <div className="flex flex-col" style={{ width: "100%" }}>

        <div className="top-0 px-4 absolute flex items-center justify-between relative z-10">
          {/* <Button onClick={handleGoBack}>
            <IconCircleArrowLeftFilled className="text-black text-xl" />
          </Button> */}
          <div className="flex-grow text-center">
            <h1 className="text-center text-2xl text-white text-2xl font-semibold pt-10 mb-10">Profile</h1>
          </div>
          <Button onClick={handleEditProfile}>
            <IconEdit className="text-white text-xl" />
          </Button>
        </div>

        <img src={imgBG} alt="" className="absolute top-0 w-full -z-10" />

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
              <div className="bg-white rounded-full p-3 border border-gray-300 shadow-md mr-4">
                <IconBuildingSkyscraper className="text-green-500 text-xl" size={32} />
              </div>
              <div className="flex flex-col w-full">
                <div className="text-lg font-normal mb-0">Company/Branch</div>
                <div className="px-3 py-1 text-lg font-semibold mb-2 w-full border border-gray-300 rounded-md">{Company}</div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="bg-white rounded-full p-3 border border-gray-300 shadow-md mr-4">
                <IconUser className="text-green-500 text-xl" size={32} />
              </div>
              <div className="flex flex-col w-full">
                <div className="text-lg font-normal mb-0">Nick Name</div>
                <div className="px-3 py-1 text-lg font-semibold mb-2 w-full border border-gray-300 rounded-md">{NickName}</div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="bg-white rounded-full p-3 border border-gray-300 shadow-md mr-4">
                <IconUserBolt className="text-green-500 text-xl" size={32} />
              </div>
              <div className="flex flex-col w-full">
                <div className="text-lg font-normal mb-0">Emergency Name</div>
                <div className="px-3 py-1 text-lg font-semibold mb-2 w-full border border-gray-300 rounded-md">{EmergencyName}</div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="bg-white rounded-full p-3 border border-gray-300 shadow-md mr-4">
                <IconPhoneCall className="text-green-500 text-xl" size={32} />
              </div>
              <div className="flex flex-col w-full">
                <div className="text-lg font-normal mb-0">Emergency Contact</div>
                <div className="px-3 py-1 text-lg font-semibold mb-2 w-full border border-gray-300 rounded-md">{EmergencyContact}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
