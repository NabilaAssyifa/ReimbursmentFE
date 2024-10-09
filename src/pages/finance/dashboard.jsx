import React from 'react';
import finance from "../../asset/finance.svg";

const DashboardF = () => {
  
  return (
    <>
      <div className="ml-72 mb-52 pr-14 p-1 bg-white font-sans min-h-full relative overflow-hidden">
        <div className='mt-44  ml-1 relative'>
          <h1 className='font-bold text-4xl mb-3' >Selamat Datang Finance !</h1>
          <p>Bersama-sama mengelola anggaran, menganalisis kinerja, dan pastikan</p>
          <p>untuk memeriksa semua detail transaksi, informasi yang diperlukan sudah</p>
          <p>disediakan untuk mendukung keputusan.</p>
        </div>
      </div>

      <img src={finance} className="mt-32 absolute right-12 top-0 h-auto max-w-full md:w-auto md:h-96" alt="" />
      </>
  );
};

export default DashboardF;
