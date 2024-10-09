import React from 'react';
import icA from "../../asset/icApproved.svg";
import icC from "../../asset/icCancel.svg";
import icW from "../../asset/icWaiting.svg";

const DashboardMember = () => {
  return (
    <div className="ml-72 pr-14 mt-[-12px] bg-white font-sans min-h-full relative overflow-hidden">
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <img src={icA} alt="" className="ml-[-6px] w-96 h-40" />
        <img src={icC} alt="" className="w-96 h-40" />
        <img src={icW} alt="" className="w-96 h-40 mr-[-6px]" />
      </div>

      <div className='mt-[-140px] mb-14 ml-8'>
        <label className='text-white font-bold text-8xl italic'>10<p className='font-normal text-sm ml-3 not-italic'>Disetujui</p></label>
      </div>
      <div className='mt-[-172px] mb-14 ml-[-199px] text-center'>
        <label className='text-white font-bold text-8xl italic'>05<p className='font-normal text-sm ml-[-15px] not-italic'>Cancel</p></label>
      </div>
      <div className='mt-[-172px] mb-14 mr-60 text-right'>
        <label className='text-white font-bold text-8xl italic'>03<p className='font-normal text-sm mr-3 not-italic'>Menunggu</p></label>
      </div>

      <div className="mt-[-12px] mb-7 ">
        <section className="bg-white border border-gray-200 p-5 rounded-lg w-full h-80 mt-5">
          <h2 className="text-lg md:text-sm font-light">Statistik</h2>
            <div className="flex justify-between items-center">
                <h3 className="text-md md:text-xl font-bold">Kategori Pengeluaran</h3>
                  <div className="text-right">
                    <p className="text-sm md:text-md font-medium bg-black text-white w-36 h-11 flex items-center justify-center rounded-xl mt-[-30px]">
                      September
                    </p>
                  </div>
            </div>

          <hr className="my-4 border-gray-300" />

          <div className="mt-3">
            <CategoryBar label="Transportasi" percentage={70} />
            <CategoryBar label="Peralatan Kantor" percentage={40} />
            <CategoryBar label="Komunikasi" percentage={30} />
            <CategoryBar label="Kesehatan" percentage={20} />
            <CategoryBar label="Biaya Lain-lain" percentage={10} />
          </div>
        </section>
      </div>
    </div>
  );
};

const CategoryBar = ({ label, percentage }) => {
  const isHighest = Math.max(70, 40, 30, 20, 10) === percentage;
  const barColor = isHighest ? 'bg-blue-500' : 'bg-gray-400';
  return (
    <div className="my-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm md:text-xs text-gray-700">{label}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${barColor} rounded-full h-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default DashboardMember;
