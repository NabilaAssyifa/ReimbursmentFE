import { useState } from 'react';
import BG from "../asset/BG.svg";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-cover bg-center min-h-screen relative" style={{ backgroundImage: `url(${BG})` }}>
            <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-b from-transparent to-[#001f3f]"></div>

            <div className="flex items-center justify-center h-full">
                <div className="bg-blue-950 w-72 h-80 backdrop-blur-lg mt-40 rounded-2xl shadow-inner shadow-white p-6 opacity-95">
                    <h1 className="flex items-center justify-center mt-4 text-white font-semibold text-2xl">Login</h1>

                    <div className="relative mt-6">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="email"
                            placeholder="Email or Username"
                            className="pl-12 w-full h-9 rounded-md px-4 text-xs bg-white"
                        />
                    </div>

                    <div className="relative mt-3">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="pl-12 w-full h-9 rounded-md px-4 text-xs bg-white"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    <div className="flex items-center mt-4">
                        <input type="checkbox" id="remember-me" className="mr-2" />
                        <label htmlFor="remember-me" className="text-gray-300 text-xs">Remember me</label>
                    </div>

                    <div className="flex items-center justify-center mt-4">
                        <button className="bg-blue-500 text-white w-full h-10 rounded-md text-sm font-semibold hover:bg-blue-600 transition-colors">
                            Masuk
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
