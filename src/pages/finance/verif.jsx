import React, { useState } from 'react';
import vector from "../../asset/vector3.svg";
import status from "../../asset/vector2.svg";
import { AiOutlineClose } from 'react-icons/ai';
import icEx from '../../asset/icExclamation.svg';
import frame1 from '../../asset/frame1.svg';
import frame2 from '../../asset/frame2.svg';
import frame3 from '../../asset/frame3.svg';


const VerifF = () => {
  const [expandedRows, setExpandedRows] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false); 
  const [isRejectPopupOpen, setIsRejectPopupOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState(''); 
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

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

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
    <div className="ml-72 pr-14 p-1 mt-[-12px] bg-white font-sans min-h-screen relative overflow-hidden">
      

      <h1 className="font-bold text-2xl mb-6">Approve Reimbursement</h1>

      <div className="relative overflow-x-auto mt-9">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    <img src={status} alt="Grid Icon" className="ml-3" style={{ width: "15px", height: "15px" }} />
                  </td>
                </tr>

                

                {expandedRows[row.id] && (
                  <tr className="bg-white ">
                    <td colSpan="5">
                      <div className="w-full h-48 bg-gray-100 rounded-md shadow-sm mt-4 mb-6 pt-20 pl-7">
                        
                        <div className=" mb-2 ml-2 mt-[-50px]">
                            <label htmlFor="message" className="block mb-2 text-xs font-medium text-gray-600 dark:text-white">Deskripsi Reimburse :</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-96 text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="alasan dari member"></textarea>
                          </div>

                        <div className='pl-10 ml-96 mt-[-101px]'>
                          <p ><strong>ID :</strong><span className='ml-2 mb-11'>{row.details.id}</span></p>
                          <p ><strong>Project Manager :</strong><span className='ml-2 '>{row.details.projectManager}</span></p>
                          <p><strong>Department :</strong><span className='ml-2'>{row.details.department}</span></p>
                          <p ><strong>Project :</strong><span className='ml-2 '>{row.details.project}</span></p>
                          <p><strong>Jumlah :</strong><span className='ml-2'>{row.details.jumlah}</span></p>
                          <button className="mt-[-60px] py-4 ml-80 bg-black hover:bg-gray-700 w-96 h-12 rounded-lg text-white text-xs mb-4 flex items-center justify-center" onClick={() => openImagePopup(0)}>
                          <img src={vector} className="mr-2 w-5 h-5" alt="Vector" />
                          Klik Bukti Barang/lainnya
                        </button>
                          
                          <div className="flex space-x-4 ml-80 mt-[-100px]">
                            <button 
                              type="button" 
                              className="w-48 text-red-700 h-8 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5" 
                              onClick={handleReject}>
                              Tolak
                            </button>
                            <button type="button" className="w-44 text-white h-8 bg-green-700 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5">
                              Setuju
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

      {isRejectPopupOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white rounded-lg p-6 w-1/3 relative">
      <button onClick={closeRejectPopup} className="absolute top-2 right-2">
        <AiOutlineClose size={24} className="text-gray-500 hover:text-gray-700" />
      </button>


      <img src={icEx} alt="Grid Icon" className="ml-48 w-14 mb-4" />

      <h2 className="text-lg text-blue-600 text-center font-bold mb-4">BERI ULASAN PENOLAKAN</h2>
      <textarea 
        value={rejectReason}
        onChange={(e) => setRejectReason(e.target.value)}
        rows="5"
        className="w-96 ml-9 text-xs  bg-gray-100 rounded-md p-2 mb-4"
        placeholder="Berikan alasan jika reimburse ditolak..."
      />
      <button className="bg-black ml-9 mb-4 w-96 text-xs text-white py-2 px-5 rounded-md" onClick={() => console.log(rejectReason)}>
        Kirim Alasan
      </button>
    </div>
  </div>
)}

      {isImagePopupOpen && (
           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
           <div className="bg-white p-8 rounded-lg shadow-lg ml-40 w-auto relative">
             <button
               className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
               onClick={closeImagePopup}
             >
               <AiOutlineClose size={20} />
             </button>
         
             <div className="flex space-x-4">
               <button
                 className="text-gray-600 hover:text-gray-900"
                 onClick={handlePreviousImage}
               >
                 &lt;
               </button>
         
               {Array.from({ length: 3 }).map((_, index) => (
                 <img
                   key={index}
                   src={images[currentImageIndex]}
                   alt={`Slide ${index + 1}`}
                   className="max-w-full h-auto"
                 />
               ))}
         
               <button
                 className="text-gray-600 hover:text-gray-900"
                 onClick={handleNextImage}
               >
                 &gt;
               </button>
             </div>
           </div>
         </div>
      
      )}
    </div>
  );
};

export default VerifF;
