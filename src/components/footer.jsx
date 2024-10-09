import React from 'react';
import logo from "../asset/logojetcoms.svg";

const Footer = () => {
  return (
    <div>
  <footer className="w-full bg-gray-100 h-28 py-6 bottom-0 right-0">
    <div className="flex ml-72 mt-2 items-start">
      <img src={logo} alt="Logo" className="w-32 h-12" />
      <div className="ml-10 text-xs">
        <p>Jl. Tegal Rotan Raya No.9 A, Sawah Baru, Kec. Ciputat,</p>
        <p>Kota Tangerang Selatan, Banten 15412</p>
        <div className="mt-1">
            <a href="tel:02122678216" className="text-blue-400 hover:text-blue-100 mr-2">021 2267 8216</a>
            |
            <a href="mailto:rumbi@gmail.com" className="text-blue-400 hover:text-blue-100 ml-2">rumbi@gmail.com</a>
       
        </div>
      </div>
    </div>          
    <p className="text-xs mr-10 text-right ">© 2024 Rumbi. All rights reserved.</p>

    
  </footer>
</div>

  );
}

export default Footer;
