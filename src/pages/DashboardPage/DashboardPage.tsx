import { ShoppingCart, Wallet2 } from 'lucide-react'
import img from '../../assets/img10.png'
import { Link } from 'react-router-dom'

export default function DashboardPage() {
  return (
    <div>
      <div className="px-6 py-6 flex gap-2 items-center">
        <img src={img} alt="" className="w-16" />
        <h1 className="text-lg font-semibold">Eka Budiono Putra Siregar</h1>
      </div>
      <div className="rounded-2xl mt-10 border-2 p-6">
        <div>
          <h1>Wist List</h1>
        </div>
          <div>
            <h1>INFORMASI</h1>
            <div>
            <h2>Gaji Per Bulan</h2>
            <p className='text-[#408FFF] text-4xl'>Rp.5.000.000</p>
            </div>
          </div>
          <div>
            <div>
            <h2>Jumlah Tabungan</h2>
            <p className='text-[#439A86] text-3xl'>Rp.3.000.000</p>
            </div>
          </div>
          <div>
            <div>
            <h2>Jumlah Pinjaman</h2>
            <p className='text-[#BB4430] text-2xl'>Rp.2.220.000</p>
            </div>
          </div>
      </div>
          <div className='flex justify-between'>
            <div className='p-3 text-lg'>
              <h2>Hasil Kalkulasi</h2>
            </div>
            <div className='p-3 text-base text-[#408FFF]'>
              <Link to={""}>Lihat semua</Link>
            </div>
          </div>
          <div className='flex'>
            <div className='rounded-2xl mt-2 border-2 p-6'>
              <div className='flex flex-col gap-4'>
                <div>
                <p className='text-3xl'>Rp. 1jt</p> 
                <p className='text-base text-secondary'>Keperluan sehari-hari</p>
                </div>
                <ShoppingCart className='text-[#F8964C]' size={55}/>
                <p className='text-2xl'>Keperluan</p>
              </div>
            </div>
            <div className='rounded-2xl mt-2 border-2 p-6'>
              <div className='flex flex-col gap-4'>
                <div>
                <p className='text-3xl'>Rp. 700rb</p> 
                <p className='text-base text-secondary'>Perlu di tabungkan</p>
                </div>
                <Wallet2 className='text-primary' size={55}/>
                <p className='text-2xl'>Tabungan</p>
              </div>
            </div>  
        </div>
    </div>
    // <div>DasboardPage</div>
  );
}
