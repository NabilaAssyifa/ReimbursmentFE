import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // 
import login from "../asset/login.svg";
import logo from "../asset/logojetcoms.svg";


const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };  

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-1/2 w-full flex flex-col justify-center px-8 lg:px-20 py-10">
        <img src={logo} alt="Logo" className="w-72 mb-7  " />
        <h4 className="text-gray-500 text-sm mb-2">HALO, SELAMAT DATANG 👋</h4>
        <h1 className="text-2xl lg:text-3xl font-semibold mb-2">Lanjutkan ke Akun Anda.</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-1">EMAIL</label>
            <input type="email" id="email" placeholder="Feliciaaxiepaham@gmail.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"/>
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-xs font-medium text-gray-500 mb-1">PASSWORD</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="**********"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <div className="mt-5 absolute inset-y-0 right-4 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-medium text-sm hover:bg-gray-800">MASUK</button>
        </form>
      </div>
      
      <div className="hidden lg:flex lg:w-1/2 justify-end items-center">
        <div className="w-8/12 h-full bg-cover bg-center" style={{ backgroundImage: `url(${login})` }}>
        </div>
      </div>
    </div>
  );
};

export default Login;
