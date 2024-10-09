import React, { useState } from 'react';
import vector from "../../asset/vector3.svg";
import status from "../../asset/vector2.svg";
import { AiOutlineClose } from 'react-icons/ai';
import frame1 from '../../asset/frame1.svg';

import icEx from '../../asset/icExclamation.svg';
import frame2 from '../../asset/frame2.svg';
import frame3 from '../../asset/frame3.svg';

const ApproveSV = () => {
  const [expandedRows, setExpandedRows] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false); 
  const [isRejectPopupOpen, setIsRejectPopupOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [statusFilter, setStatusFilter] = useState('');  
  const [dateFilter, setDateFilter] = useState(''); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  const images = [frame1, frame2, frame3];

  const openImagePopup = (index) => {
    setCurrentImageIndex(index);
    setIsImagePopupOpen(true);
  };

  const closeImagePopup = () => {
    setIsImagePopupOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  // menampilkan gambar sebelumnya
  const handlePreviousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  // status baris yang diperluas
  const toggleRow = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleReject = () => {
    setIsRejectPopupOpen(true);
  };

  const closeRejectPopup = () => {
    setIsRejectPopupOpen(false);
  };

  const tableData = [
    {
      id: '001',
      projectName: 'Lorem Ipsum',
      amount: 'Rp 500.000',
      status: 'Pending',
      details: {
        id: '001',
        projectManager: 'Heru Budi',
        department: 'IT',
        project: 'System Upgrade',
        jumlah: 'Rp 500.000',
      },
    },
    {
      id: '002',
      projectName: 'Dolor Sit Amet',
      amount: 'Rp 1.200.000',
      status: 'Pending',
      details: {
        id: '002',
        projectManager: 'Mira Astuti',
        department: 'Marketing',
        project: 'Campaign Launch',
        jumlah: 'Rp 1.200.000',
      },
    },
  ];

  return (
    <div className="ml-64 mt-[-20px] p-8 pr-20 bg-white font-sans min-h-screen relative overflow-hidden">
      <h1 className="font-bold text-2xl mb-6">Approve Reimbursement</h1>

      <div className="flex space-x-4">
        <select
          className="bg-black text-white border border-gray-300 rounded-full text-xs px-4 py-1"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="Semua" className='mr-[-10px]'>Jenis Project</option>
          <option value="ProjectBased">Project Based</option>
          <option value="ProjectOprasional">Project Oprasional</option>
        </select>

        <select
          className="bg-black text-white border border-gray-300 rounded-full text-xs px-4"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option value="">hari terakhir</option>
          <option value="12-09-2024">7 hari terakhir</option>
          <option value="13-09-2024">30 hari terakhir</option>
          <option value="14-09-2024">sebulan terakhir</option>
          <option value="14-09-2024">setahun terakhir</option>
        </select>
      </div>

      <div className="relative overflow-x-auto mt-6">
        <table className="w-full text-sm text-left border-b border-gray-200 rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Tanggal Pengajuan</th>
              <th scope="col" className="px-6 py-3">Nama Project</th>
              <th scope="col" className="px-6 py-3">Jumlah</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <React.Fragment key={row.id}>
                <tr className="bg-white border-t dark:bg-gray-800 dark:border-gray-700 cursor-pointer" onClick={() => toggleRow(row.id)}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {row.id}
                  </th>
                  <td className="px-6 py-4">12-09-2024</td>
                  <td className="px-6 py-4">{row.projectName}</td>
                  <td className="px-6 py-4">{row.amount}</td>
                  <td className="px-6 py-4">
                    <img src={status} alt="Status Icon" className="ml-3" style={{ width: "15px", height: "15px" }} />
                  </td>
                </tr>

                {expandedRows[row.id] && (
                  <tr className="bg-white">
                    <td colSpan="5">
                      <div className="w-full h-48 bg-gray-100 rounded-md shadow-sm mt-4 mb-6 pt-20 pl-7">
                        <div className="mb-2 ml-2 mt-[-50px]">
                          <label htmlFor="message" className="block mb-2 text-xs font-medium text-gray-600 dark:text-white">Deskripsi Reimburse :</label>
                          <textarea id="message" rows="4" className="block p-2.5 w-96 text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="alasan dari member"></textarea>
                        </div>

                        <div className='pl-10 ml-96 mt-[-101px]'>
                          <p><strong>ID :</strong><span className='ml-2 mb-11'>{row.details.id}</span></p>
                          <p><strong>Project Manager :</strong><span className='ml-2'>{row.details.projectManager}</span></p>
                          <p><strong>Department :</strong><span className='ml-2'>{row.details.department}</span></p>
                          <p><strong>Project :</strong><span className='ml-2'>{row.details.project}</span></p>
                          <p><strong>Jumlah :</strong><span className='ml-2'>{row.details.jumlah}</span></p>
                          <button className="mt-[-60px] py-4 ml-72 bg-black hover:bg-gray-700 w-96 h-12 rounded-lg text-white text-xs mb-4 flex items-center justify-center" onClick={() => openImagePopup(0)}>
                            <img src={vector} className="mr-2 w-4 h-4" alt="Vector" />
                            Klik Bukti Barang/lainnya
                          </button>
                          
                          <div className="flex space-x-4 ml-72 mt-[-100px]">
                            <button 
                              type="button" 
                              className="w-48 text-red-700 h-8 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5" 
                              onClick={handleReject}>
                              Tolak
                            </button>
                            <button type="button" className="w-44 text-white h-8 bg-green-700 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5">
                              Setujui
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-4">
            <button onClick={closeImagePopup} className="absolute top-2 right-2">
              <AiOutlineClose className="text-black" />
            </button>
            <img src={images[currentImageIndex]} alt="Popup" className="w-96 h-96 object-cover rounded-lg" />
            <button onClick={handlePreviousImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-l">
              Prev
            </button>
            <button onClick={handleNextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-r">
              Next
            </button>
          </div>
        </div>
      )}

      {isRejectPopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 w-96 rounded-md shadow-md flex flex-col items-center"> 
            <img src={icEx} className="mb-4" alt="" /> 
            <h2 className="text-lg font-bold mb-4 text-center">Tolak Reimburse</h2>
            <textarea
              id="rejectReason"
              rows="4"
              className="block p-2.5 w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg text-xs"
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Masukkan alasan penolakan di sini"
            />
            <div className="flex justify-center mt-4 w-full"> 
              <button onClick={closeRejectPopup} className="bg-red-900 text-xs text-white px-4 py-2 rounded-md mr-2">Batal</button>
              <button className="bg-black text-xs text-white px-4 py-2 rounded-md">Kirim</button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ApproveSV;
