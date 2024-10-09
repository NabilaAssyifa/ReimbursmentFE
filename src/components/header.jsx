import avatar from '../asset/avatar.svg';
import logout from "../asset/iconLogout.svg";
import React, { useState } from 'react';

const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="ml-72 pr-14 mt-2 bg-white font-sans min-h-20 relative ">
            <header className="flex flex-col md:flex-row justify-between items-center mb-3 mt-5">
            <a className='text-base md:text-xs text-gray-400 hover:text-gray-600 ml-1 mt-3 ' href='/dashboard'>Dashboard &nbsp; &gt; <span className='ml-1 text-gray-700' >lorem</span></a>

                <div className="relative">
                    <button className="flex items-center mt-3 md:mt-0" onClick={togglePopup}>
                        <span className="mr-2 text-sm md:text-s">Lorem</span>
                        <img src={avatar} alt="User Avatar" className="w-8 h-8 md:w-8 md:h-8 rounded-full" />
                    </button>

                    {isPopupOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 dark:bg-gray-900 rounded-md z-[1000]">
                            
                            <div class="px-4 py-3">
                              <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                              <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <hr className=" border-gray-300" />

                            <button className="flex items-center  w-full p-2 text-red-800 hover:bg-gray-100 font-medium rounded-md" onClick={() => console.log('Logging out...')}>
                                <img className='ml-2' src={logout} alt="Logout icon" style={{ width: "20px", height: "20px" }} />
                                <span className="ml-2 text-sm">Logout</span>
                            </button>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Header;
