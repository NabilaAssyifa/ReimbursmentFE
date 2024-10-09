import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { fa1, fa2, fa3, faImage, faCircleCheck, faCircleXmark, faCircleInfo, faCartPlus, faCheckToSlot} from '@fortawesome/free-solid-svg-icons';
import { AiOutlineClose } from 'react-icons/ai';

const DetailApproval = () => {
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
      <h1 className="font-bold text-3xl mb-8 text-gray-700">Detail Approval</h1>

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
        <h2 className="font-semibold text-xl mb-4 text-black">
          Approval 
          <FontAwesomeIcon icon={faCheckToSlot} className="text-gray-600 text-xl ml-2" />
        </h2>
        <hr className="my-4 border-gray-300 mb-7" />
        <div>
          <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
            Catatan:
          </label>
          <textarea
            id="notes"
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Berikan Alasan Jika Request Di tolak..."
          />
        </div>
        <div className="flex space-x-4 mb-4 mt-3">
          <button className="px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800 transition duration-200">
            Terima
          </button>
          <button className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800 transition duration-200">
            Tolak
          </button>
        </div>
      </div>
    </div>

  );
};

export default DetailApproval;
