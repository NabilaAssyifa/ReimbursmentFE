import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import vector from "../../asset/vector3.svg";
import { AiOutlineClose } from 'react-icons/ai';
import frame1 from '../../asset/frame1.svg';
import frame2 from '../../asset/frame2.svg';
import frame3 from '../../asset/frame3.svg';
const ReimburseSV = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [expandedItems, setExpandedItems] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  const [paymentMethod, setPaymentMethod] = useState("");
  const [typeProject, setTypeProject] = useState("");
  const images = [frame1, frame2, frame3];


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleItem = (index) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const openImagePopup = () => {
    
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

  const items = [
    { id: 1, title: 'Barang/Lainnya 1', details: 'Details for item 1' },
    { id: 2, title: 'Barang/Lainnya 2', details: 'Details for item 2' },
  ];

  return (
      <div className="ml-72 pr-14 p-1 mt-[-12px] bg-white font-sans min-h-screen relative overflow-hidden">
        <h1 className="font-bold text-2xl mb-6">Pengajuan Reimbursement</h1>
          <div>
            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Lengkap</label>
            <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" placeholder='masukkan nama lengkap...' />
          </div>

          <div className="mt-2">
            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi Reimburse</label>
            <textarea className='rounded-lg border text-xs w-full h-32 px-2 py-2 bg-gray-50' placeholder='masukkan alasan reimburse...' ></textarea>
          </div>

      <div className='mb-2' >
        <label htmlFor="payment-method" className="mt-2 block text-sm font-medium text-gray-900 dark:text-white">Metode Pembayaran</label>
        <select 
          id="payment-method" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Pilih Metode Pembayaran</option>
          <option value="cash">Cash</option>
          <option value="transfer">Transfer</option>
        </select>
      </div>

      {paymentMethod === "transfer" && ( 
        <div className='mb-2' >
          <label htmlFor="small-input" className="mt-2 block text-sm font-medium text-gray-900 dark:text-white">No Rekening</label>
          <label htmlFor="small-input" className="block text-[9px] mb-2 font-normal text-red-500 dark:text-white">*Bila tidak diisi maka menggunakan no rekening yang tersedia pada akun</label>
          <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>
      )}

      <form class="mb-3">
          <label for="projectType" class="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Jenis Project</label>
          <select 
              id="projectType" 
              class="bg-gray-50 h-9 border border-gray-300 text-gray-700 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setTypeProject(e.target.value)}>
              <option value="" selected>Pilih Jenis Project</option>
              <option value="ProjectBased">Project Based</option>
              <option value="ProjectOprasional">Project Oprasional</option>
          </select>
      </form>

      {typeProject === "ProjectOprasional" && (
          <form class="mb-3">
              <label for="company" class="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Perusahaan</label>
              <select 
                  id="company" 
                  class="bg-gray-50 h-9 border border-gray-300 text-gray-700 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="" selected>Pilih Perusahaan</option>
                  <option value="PTQuinsis">PT Quinsis Lintas Mitra</option>
                  <option value="PTLintasTelematika">PT Lintas Telematika Nusantara</option>
                  <option value="PTJetcoms">PT Jetcoms Netindo</option>
                  <option value="PTMitratama">PT Mitratama Mahadirga Makmur</option>
              </select>
          </form>
      )}

      {typeProject === "ProjectBased" && (
          <form class="mb-3">
              <label for="projectName" class="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Nama Project</label>
              <select 
                  id="projectName" 
                  class="bg-gray-50 h-9 border border-gray-300 text-gray-700 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="" selected>Pilih Project</option>
                  <option value="ProjectABC">Project Abc</option>
                  <option value="ProjectCDE">Project Cde</option>
                  <option value="ProjectEFG">Project Efg</option>
              </select>
          </form>
      )}


      <div className='mb-7'>
        <label htmlFor="small-input" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Bukti Barang/lainnya</label>

        <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
            </label>
        </div> 
      </div>

      <hr className="my-4 border-gray-200 mb-12"/>

      <h1 className="font-bold text-2xl mb-6">Barang/lainnya</h1>
      <div className="w-full flex justify-end"> 
        <button
          type="button"
          className="mt-[-60px] w-42 h-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={toggleModal}
        >
          <FontAwesomeIcon icon={faPlus} /> <span className="ml-2">Add Request</span>
        </button>
      </div>

      {isModalOpen && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
         <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
           <button
             className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
             onClick={toggleModal}
           >
             <AiOutlineClose size={24} />
           </button>
   
           <h2 className="text-xl font-bold mb-4">Form Daftar Barang</h2>
           <div className="mb-2 mt-6">
             <label className="block text-sm font-medium text-gray-700 mb-1">
               Nama Barang/Lainnya
             </label>
             <input
               type="text"
               className="w-full border border-gray-300 px-3 p-2 rounded-lg text-xs"
               placeholder="Masukkan nama barang/lainnya..."
             />
           </div>
           <div className="mb-3">
             <label className="block text-sm font-medium text-gray-700 mb-1">
               Harga
             </label>
             <input
               type="text"
               className="w-full border border-gray-300 px-3 p-2 rounded-lg text-xs"
               placeholder="Masukkan harga barang/lainnya..."
             />
           </div>

           
           
          
          <form class="">
              <label for="counter-input" class="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Choose quantity:</label>
              <div class="relative flex items-center">
                  <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                      <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                      </svg>
                  </button>
                  <input type="text" id="counter-input" data-input-counter class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required />
                  <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                      <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                      </svg>
                  </button>
              </div>
          </form>

          <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-800 w-full h-10 mb-5 mt-8 text-white text-xs py-2 px-4 rounded-full hover:bg-gray-900"
                  onClick={toggleModal}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
      )}
        <div className="border border-gray-300 rounded-md text-xs p-5">
          {items.map((item, index) => (
            <div key={item.id} className="mb-4">
              <button
                className="w-full bg-gray-100 p-3 rounded-lg shadow mb-2 flex justify-between items-center"
                onClick={() => toggleItem(index)}
              >
                <span>{item.title}</span>
                <span className="text-gray-500">≡</span>
              </button>

              {expandedItems[index] && (
                <div className="bg-gray-100 rounded-lg shadow-md p-4 mt-[-19px] mb-10">
                  <div className="grid grid-cols-6 gap-4 text-sm">
                    <p className="font-bold">ID</p>
                    <p className="font-bold">Nama Barang/Lainnya</p>
                    <p className="font-bold">Harga</p>
                    <p className="font-bold">Bukti Barang/Lainnya</p>
                    <p className="font-bold">Project</p>
                    <p className="font-bold">No Rekening</p>

                    <p>789217</p>
                    <p>Lorem Ipsum Dolor</p>
                    <p>Lorem Ipsum Dolor</p>
                    <p>
                    <button className="py-1 bg-black hover:bg-gray-700 w-40 h-8 rounded-lg text-white text-[9px] mb-4 flex items-center justify-center" onClick={() => openImagePopup(0)}>
                          <img src={vector} className="mr-2 w-3 h-3" alt="Vector" />
                          Klik Bukti Barang/lainnya
                        </button>
                    </p>
                    <p>Lorem Ipsum Dolor</p>
                    <p>6729102 A/N Mulyono</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

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

        <button
          type="button"
          className="mt-5 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Submit
        </button>
      </div>
  );
};

export default ReimburseSV;
