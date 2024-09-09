import React, { useState, useEffect, useRef } from "react";
import logo from "../asset/logo.svg";
import { FaClipboardList } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { TbHelpSquareRoundedFilled } from "react-icons/tb";
import { FaMoon, FaSignOutAlt } from "react-icons/fa"; // Ikon untuk Dark Mode dan Logout
import { Switch } from "@headlessui/react"; // Toggle Switch untuk Dark Mode

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk mengontrol visibilitas sidebar
    const [enabled, setEnabled] = useState(false); // State untuk Dark Mode
    const sidebarRef = useRef(null); // Ref untuk mendeteksi klik di luar sidebar
    const overlayRef = useRef(null); // Ref untuk overlay

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle visibilitas sidebar
    };

    const handleClickOutside = (event) => {
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target) &&
            overlayRef.current &&
            overlayRef.current.contains(event.target)
        ) {
            setIsSidebarOpen(false); // Menutup sidebar jika klik di luar atau pada overlay
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            {/* Icon Menu */}
            {!isSidebarOpen && (
                <div className="fixed top-3 left-6 z-50 p-4">
                    <RiMenu2Line
                        className="text-2xl cursor-pointer hover:text-blue-500 transition duration-100"
                        onClick={toggleSidebar}
                    />
                </div>
            )}

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    ref={overlayRef} // Menghubungkan ref ke overlay
                    className="fixed inset-0 bg-black bg-opacity-50 z-40" // Overlay dengan efek gelap
                ></div>
            )}

            {/* Sidebar */}
            <div
                ref={sidebarRef} // Menghubungkan ref ke elemen sidebar
                className={`fixed top-0 left-0 w-[250px] h-full bg-[#0142AF] shadow-md z-50 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center pl-7 py-10">
                    <img src={logo} alt="Logo" className="w-32 h-auto" />
                </div>

                <div className="border-t border-gray-300 mx-7 my-0 opacity-50"></div>

                <ul className="mt-2">
                    <li className="px-7 py-2">
                        <a
                            href="/dashboard"
                            className="flex items-center text-white font-sans  hover:bg-blue-700 rounded-lg transition-all duration-200 hover:scale-205 hover: h-10"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <TbLayoutDashboardFilled className="mr-5" size={20} /> Dashboard
                        </a>
                    </li>
                </ul>

                <ul className="mt-2">
                    <li className="px-7 py-2">
                        <a
                            href="/history-request"
                            className="flex items-center text-white font-sans hover:bg-blue-700 rounded-lg transition-all duration-200 hover:scale-205 hover: h-10"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <FaClipboardList className="mr-5" size={22} /> List Project
                        </a>
                    </li>
                </ul>

                {/* Help Center Link */}
                <ul className="mt-2">
                    <li className="px-7 py-2">
                        <a
                            href="/help-center"
                            className="flex items-center text-white font-sans hover:bg-blue-700 rounded-lg transition-all duration-200 hover:scale-205 hover: h-10 "
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <TbHelpSquareRoundedFilled className="mr-4" size={24} /> Help Center
                        </a>
                    </li>
                </ul>

                {/* Garis di atas bagian bawah */}
                <div className="border-t border-gray-300 mx-7 my-4 opacity-50"></div>

                {/* Dark Mode Toggle */}
                <ul className="mt-2">
                    <li className="px-7 py-2 flex justify-between items-center">
                        <div className="flex items-center">
                            <FaMoon className="mr-5 text-white" size={20} />
                            <span className="text-white font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>Light Mode</span>
                        </div>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-black' : 'bg-gray-300'}
                            relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only">Enable notifications</span>
                            <span
                                className={`${enabled ? 'translate-x-6' : 'translate-x-1'}
                                inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                    </li>
                </ul>

                <ul className="mt-2">
                    <li className="px-7 py-2">
                        <a
                            href="/logout"
                            className="flex items-center text-white hover:text-orange text-base font-sans font-medium"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <FaSignOutAlt className="mr-5" size={20} /> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
