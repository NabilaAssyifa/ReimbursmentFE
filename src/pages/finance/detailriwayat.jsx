import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { fa1, fa2, fa3, faImage, faCircleCheck, faCircleXmark, faCircleInfo, faCartPlus, faCheckToSlot} from '@fortawesome/free-solid-svg-icons';
import { AiOutlineClose } from 'react-icons/ai';




const DetailRiwayat = () => {
  const [images] = useState([
    'https://via.placeholder.com/150/cfffdb',
    'https://via.placeholder.com/150/cffff8',
    'https://via.placeholder.com/150/cfeaff',
    'https://via.placeholder.com/150/d6cfff',
    'https://via.placeholder.com/150/ffcff0',
  ]);

  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);


  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openImagePopup = () => {
    setIsImagePopupOpen(true);
  };

  const closeImagePopup = () => {
    setIsImagePopupOpen(false);
  };

  const handleNextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  
  const handlePreviousImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  
  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 3 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="ml-72 mb-10 pr-14 p-1 bg-white font-sans min-h-screen relative overflow-hidden">
      <h1 className="font-bold text-3xl mb-8 text-gray-700">Detail Riwayat</h1>

      <div className="bg-gray-50 border rounded-lg p-6 mb-8">
        <h2 className="font-semibold text-xl mb-4 text-black">Informasi Request <FontAwesomeIcon icon={faCircleInfo} className="text-gray-600 text-xl ml-2" /></h2>
        <hr className="my-4 border-gray-300"/>

        <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
          <div><p className="font-normal text-gray-600">Nama</p> John Doe</div>
          <div><p className="font-normal text-gray-600">Metode Pembayaran</p> Transfer </div>
          <div><p className="font-normal text-gray-600">Jenis Project</p> Project Based</div>
          <div><p className="font-normal text-gray-600">Nama Project</p> Proyek instalasi jaringan </div>
          <div><p className="font-normal text-gray-600">No Rekening</p> 6543210987</div>
          <div><p className="font-normal text-gray-600">Nama Departemen</p> Operasional</div>          
          <div><p className="font-normal text-gray-600">Deskripsi</p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et </div>
          <div><p className="font-normal text-gray-600">Nama Instansi</p> PT. Luxury Corp</div>
          </div>
      </div>

      <div className="bg-gray-50 border rounded-lg p-6 mb-8 relative">
        <h2 className="font-semibold text-xl mb-4 text-black">Dokumentasi Request<FontAwesomeIcon icon={faImage} className="text-gray-600 text-xl ml-3" /></h2>
        <hr className="my-4 border-gray-300 mb-5"/>

        <div className="flex items-center">
          <button onClick={goToPreviousImage} className="text-gray-500">
            <FontAwesomeIcon icon={faChevronLeft} size="1x" />
          </button>
          <div className="grid grid-cols-3 gap-4 w-full p-2">
            {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
              <div key={index} className="w-full h-48">
                <img
                  src={image}
                  alt={`Request ${currentIndex + index + 1}`}
                  className="object-cover w-full h-full rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
          <button onClick={goToNextImage} className="text-gray-500">
            <FontAwesomeIcon icon={faChevronRight} size="1x" />
          </button>
        </div>
      </div>

      <div className="bg-gray-50 border rounded-lg p-6 mb-8">
        <h2 className="font-semibold text-xl mb-4 text-black">Pengajuan Barang/Lainnya <FontAwesomeIcon icon={faCartPlus} className="text-gray-600 text-xl ml-2" /></h2>
        <hr className="my-4 border-gray-300"/>

        <ul className="list-disc ml-5 text-gray-600">
          <li>Pulpen</li>
          <li>Spidol</li>
          <li>Buku Catatan</li>
        </ul>
      </div>

      <div className="bg-gray-50 border rounded-lg p-6 mb-8">
        <h2 className="font-semibold text-xl mb-4 text-black">Approval <FontAwesomeIcon icon={faCheckToSlot} className="text-gray-600 text-xl ml-2" /></h2>
        <hr className="my-4 border-gray-300 mb-7"/>
        <div className='flex space-x-4' >
                      <div>
                          <div className="block max-w-sm p-6 bg-blue-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                          <p className="w-10 text-white bg-blue-900 rounded-full px-4 py-2" ><FontAwesomeIcon icon={fa1} /></p>
                          <h5 class="mb-5 mt-[-32px] text-center text-2xl font-bold tracking-tight text-blue-900 dark:text-white">SUPERVISOR</h5>
                          <textarea className='rounded-lg border text-xs w-full h-32 px-4 py-3 bg-gray-50' placeholder='note dari supervisor' ></textarea>
                          <p class="font-normal text-[10px] w-20 px-2 border border-blue-900 rounded-full text-gray-700 dark:text-gray-400 mt-4">30/09/2024</p>
                          <p class="font-normal text-[10px] bg-green-900 w-52 ml-32 rounded-full px-5 text-white dark:text-gray-400 mt-[-20px] ">      
                            Approve oleh bambang sunardi</p>
                          </div>
                      </div>

                      <div>
                          <div class=" block max-w-sm p-6 bg-purple-50 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                          <p className="w-10 text-white bg-purple-900 rounded-full px-4 py-2" ><FontAwesomeIcon icon={fa2} /></p>
                          <h5 class="mb-5 mt-[-32px] text-center text-2xl font-bold tracking-tight text-purple-900 dark:text-white">FINANCE</h5>
                          <textarea className='rounded-lg border text-xs w-full h-32 px-4 py-3' placeholder='note dari finance' ></textarea>
                          <p class="font-normal text-[10px] w-20 px-2 border border-blue-900 rounded-full text-gray-700 dark:text-gray-400 mt-4">30/09/2024</p>
                          <p class="font-normal text-[10px] bg-green-900 w-52 ml-32 rounded-full px-5 text-white dark:text-gray-400 mt-[-20px] ">      
                            Approve oleh bambang sunardi</p>
                          </div>
                      </div>

                      <div>
                        <div class=" block w-80 p-6 bg-yellow-50 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <p className="w-10 text-white bg-yellow-900 rounded-full px-4 py-2" ><FontAwesomeIcon icon={fa3} /></p>
                        <h5 class="mb-5 mt-[-32px] text-center text-2xl font-bold tracking-tight text-yellow-900 dark:text-white">REALISASI</h5>
                        <textarea className='rounded-lg border text-xs w-full h-32 px-4 py-3' placeholder='note dari realisasi' ></textarea>
                        <p class="font-normal text-[10px] w-20 px-2 border border-blue-900 rounded-full text-gray-700 dark:text-gray-400 mt-4">30/09/2024</p>
                        <button type='button' className="flex items-center justify-center font-normal text-[10px] bg-black w-32 ml-32 rounded-full px-5  text-white dark:text-gray-400 mt-[-20px]" onClick={() => openImagePopup(0)} >
                          <FontAwesomeIcon icon={faImage} className="text-white text-xs mr-2" />
                          Lihat Bukti
                        </button> 
                      </div>
                </div>
          </div>
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

          <div className="flex items-center space-x-4">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={handlePreviousImage}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {Array.from({ length: 3 }).map((_, index) => (
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="max-w-full h-auto"
            />
            ))}

            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={handleNextImage}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
)}


      <div className="bg-gray-50 border rounded-lg p-6">
        <h2 className="font-semibold text-xl mb-4 text-gray-700">History Edit</h2>

        <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Terakhir di edit pada 20 Agustus 2024</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Diterima <FontAwesomeIcon icon={faCircleCheck} className="text-green-700 text-sm mr-2" />
                </h3>
                <button onClick={togglePopup} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Lihat <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg></button>
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10 Agustus 2024</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Diterima <FontAwesomeIcon icon={faCircleCheck} className="text-green-700 text-sm mr-2" /></h3>
                <button onClick={togglePopup} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Lihat <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg></button>
            </li>
            <li class="ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1 Agustus 2024</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Ditolak <FontAwesomeIcon icon={faCircleXmark} className="text-red-700 text-sm mr-2" /></h3>
                <button onClick={togglePopup} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Lihat <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg></button>
            </li>
        </ol>
      </div>
      
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closePopup}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl h-4/5 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          
            <div className="bg-gray-50 border rounded-lg p-6 mb-8">
              <h2 className="font-semibold text-xl mb-4 text-black">Informasi Request 
                <FontAwesomeIcon icon={faCircleInfo} className="text-gray-600 text-xl ml-2" />
              </h2>
              
              <hr className="my-4 border-gray-300"/>
              <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
                <div><p className="font-normal text-gray-600">Nama</p> John Doe</div>
                <div><p className="font-normal text-gray-600">Metode Pembayaran</p> Transfer</div>
                <div><p className="font-normal text-gray-600">Jenis Project</p> Project Based</div>
                <div><p className="font-normal text-gray-600">Nama Project</p> Proyek instalasi jaringan</div>
                <div><p className="font-normal text-gray-600">No Rekening</p> 6543210987</div>
                <div><p className="font-normal text-gray-600">Nama Departemen</p> Operasional</div>
                <div><p className="font-normal text-gray-600">Deskripsi</p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div><p className="font-normal text-gray-600">Nama Instansi</p> PT. Luxury Corp</div>
              </div>
            </div>

            <div className="bg-gray-50 border rounded-lg p-6 mb-8 relative">
              <h2 className="font-semibold text-xl mb-4 text-black">Dokumentasi Request 
                <FontAwesomeIcon icon={faImage} className="text-gray-600 text-xl ml-3" />
              </h2>
              <hr className="my-4 border-gray-300 mb-5"/>

              <div className="flex items-center">
                <button onClick={goToPreviousImage} className="text-gray-500">
                  <FontAwesomeIcon icon={faChevronLeft} size="1x" />
                </button>
                <div className="grid grid-cols-3 gap-4 w-full p-2">
                  {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                    <div key={index} className="w-full h-48">
                      <img
                        src={image}
                        alt={`Request ${currentIndex + index + 1}`}
                        className="object-cover w-full h-full rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </div>
                <button onClick={goToNextImage} className="text-gray-500">
                  <FontAwesomeIcon icon={faChevronRight} size="1x" />
                </button>
              </div>
            </div>

            <div className="bg-gray-50 border rounded-lg p-6 mb-8">
              <h2 className="font-semibold text-xl mb-4 text-black">Pengajuan Barang/Lainnya <FontAwesomeIcon icon={faCartPlus} className="text-gray-600 text-xl ml-2" /></h2>
              <hr className="my-4 border-gray-300"/>

              <ul className="list-disc ml-5 text-gray-600">
                <li>Pulpen</li>
                <li>Spidol</li>
                <li>Buku Catatan</li>
              </ul>
            </div>

            '<div className="bg-gray-50 border rounded-lg p-6 mb-8">
              <h2 className="font-semibold text-xl mb-4 text-black">Approval <FontAwesomeIcon icon={faCheckToSlot} className="text-gray-600 text-xl ml-2" /></h2>
              <hr className="my-4 border-gray-300 mb-7"/>
              <div className='flex space-x-10' >
                            
                            <div>
                                <div class=" block max-w-60 p-6 bg-blue-50 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <p className="w-10 text-white bg-blue-900 rounded-full px-4 py-2" ><FontAwesomeIcon icon={fa1} /></p>
                                <h5 class="mb-5 ml-8 mt-[-32px] text-center text-2xl font-bold tracking-tight text-blue-900 dark:text-white">SUPERVISOR</h5>
                                <textarea className='rounded-lg border text-xs w-full h-32 px-4 py-3' placeholder='note dari finance' ></textarea>
                                <p class="font-normal text-[7px] w-14 px-2 border border-blue-900 rounded-full text-gray-700 dark:text-gray-400 mt-4">30/09/2024</p>
                                <p class="font-normal text-[7px] bg-green-900 w-32 ml-20 rounded-full px-2 text-white dark:text-gray-400 mt-[-12px] ">      
                                  Approve oleh bambang sunardi</p>
                                </div>
                            </div>
                            <div>
                                <div class=" block max-w-60 p-6 bg-purple-50 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <p className="w-10 text-white bg-purple-900 rounded-full px-4 py-2" ><FontAwesomeIcon icon={fa2} /></p>
                                <h5 class="mb-5 ml-8 mt-[-32px] text-center text-2xl font-bold tracking-tight text-purple-900 dark:text-white">FINANCE</h5>
                                <textarea className='rounded-lg border text-xs w-full h-32 px-4 py-3' placeholder='note dari finance' ></textarea>
                                <p class="font-normal text-[7px] w-14 px-2 border border-blue-900 rounded-full text-gray-700 dark:text-gray-400 mt-4">30/09/2024</p>
                                <p class="font-normal text-[7px] bg-green-900 w-32 ml-20 rounded-full px-2 text-white dark:text-gray-400 mt-[-12px] ">      
                                  Approve oleh bambang sunardi</p>
                                </div>
                            </div>

                            <div>
                              <div class=" block w-60 p-6 bg-yellow-50 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                              <p className="w-10 text-white bg-yellow-900 rounded-full px-4 py-2" ><FontAwesomeIcon icon={fa3} /></p>
                              <h5 class="mb-5 ml-8 mt-[-32px] text-center text-2xl font-bold tracking-tight text-yellow-900 dark:text-white">REALISASI</h5>
                              <textarea className='rounded-lg border text-xs w-full h-32 px-4 py-3' placeholder='note dari realisasi' ></textarea>
                              <p class="font-normal text-[7px] w-14 px-2 border border-blue-900 rounded-full text-gray-700 dark:text-gray-400 mt-4">30/09/2024</p>
                              
                            </div>
                      </div>
                </div>
            </div>
            <div className="bg-gray-50 border rounded-lg p-6 mb-8 relative">
              <h2 className="font-semibold text-xl mb-4 text-black">Bukti Struk 
                <FontAwesomeIcon icon={faImage} className="text-gray-600 text-xl ml-3" />
              </h2>
              <hr className="my-4 border-gray-300 mb-5"/>

              <div className="flex items-center">
                <button onClick={goToPreviousImage} className="text-gray-500">
                  <FontAwesomeIcon icon={faChevronLeft} size="1x" />
                </button>
                <div className="grid grid-cols-3 gap-4 w-full p-2">
                  {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                    <div key={index} className="w-full h-48">
                      <img
                        src={image}
                        alt={`Request ${currentIndex + index + 1}`}
                        className="object-cover w-full h-full rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </div>
                <button onClick={goToNextImage} className="text-gray-500">
                  <FontAwesomeIcon icon={faChevronRight} size="1x" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default DetailRiwayat;
