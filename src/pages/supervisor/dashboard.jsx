import React from 'react';
import sv from "../../asset/supervisor.svg";

const DashboardSV = () => {
  
  return (
    <>
      <div className="ml-72 mb-40 pr-14 p-1 bg-white font-sans min-h-full relative overflow-hidden">
        <div className='mt-44 mb-10 ml-1 relative'>
          <h1 className='font-bold text-4xl mb-5' >Selamat Datang Supervisor !</h1>
          <p>Di halaman ini, Anda dapat memantau dan mengelola semua permohonan</p>
          <p>reimbursement yang diajukan oleh anggota tim, pastikan untuk memberikan</p>
          <p>persetujuan atau penolakan yang tepat.</p>
        </div>
      </div>

      <img src={sv} className="mt-32 absolute right-2 top-0 h-auto max-w-full md:w-auto md:h-96 " alt='' />
    </>
  );
};

export default DashboardSV;
