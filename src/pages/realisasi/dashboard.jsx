import React from 'react';
import realisasi from "../../asset/realisasi1.svg";

const DashboardR = () => {
  return (
    <>
      <div className="ml-72 mb-40 pr-14 p-1 bg-white font-sans min-h-full relative overflow-hidden">
        <div className='mt-40 mb-[60px] relative'>
          <h1 className='font-bold text-4xl mb-4' >Selamat Datang Realisasi !</h1>
          <p>Pastikan untuk memeriksa semua detail permohonan dan melaksanakan</p>
          <p>proses pembayaran dengan akurat Kami telah menyediakan semua informasi</p>
          <p>yang diperlukan untuk membantu Anda.</p>
        </div>
      </div>
      <img src={realisasi} className="mt-32 absolute right-16 top-0 h-auto max-w-full md:w-96 md:h-96 " alt='vector' />
    </>
  );
};

export default DashboardR;
