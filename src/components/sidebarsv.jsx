import React, { useState, useEffect, useRef } from "react";
import logo from "../asset/logojetcoms.svg";
import { RiMenu2Line } from "react-icons/ri";
import iconGrid from "../asset/iconGrid.svg"; 
import iconProject from "../asset/project.svg"; 
import iconReimburse from "../asset/reimburst2.svg"; 
import iconRiwayat from "../asset/riwayat.svg"; 
import iconApprove from "../asset/approve.svg"; 
import { useLocation } from "react-router-dom";

const SidebarSV = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    const [isMobile, setIsMobile] = useState(false); 
    const sidebarRef = useRef(null); 
    const overlayRef = useRef(null); 

    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); 
    };

    const handleClickOutside = (event) => {
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target) &&
            overlayRef.current &&
            overlayRef.current.contains(event.target)
        ) {
            setIsSidebarOpen(false); 
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
                setIsSidebarOpen(false); 
            } else {
                setIsMobile(false);
                setIsSidebarOpen(true); 
            }
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            {isMobile && !isSidebarOpen && (
                <div className="fixed top-3 left-6 z-50 p-4">
                    <RiMenu2Line
                        className="text-2xl cursor-pointer hover:text-gray-500 transition duration-100"
                        onClick={toggleSidebar}
                    />
                </div>
            )}

            {isMobile && isSidebarOpen && (
                <div
                    ref={overlayRef}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                ></div>
            )}

            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 w-[250px] h-full bg-[#1D1C21] shadow-md z-50 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center pl-7 py-10">
                    <img src={logo} alt="Logo" className="w-44 h-auto rounded-xl" />
                </div>

                <ul className="mt-2">
                    <li className="py-2">
                        <a
                            href="/supervisor/dashboard"
                            className={"flex items-center text-white font-sans hover:bg-neutral-700 transition-all duration-200 h-10 w-full "+(location.pathname==='/supervisor/dashboard'?'border-l-4 border-white':'')}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <img src={iconGrid} alt="Grid Icon" className="mr-5 ml-10" style={{ width: "20px", height: "20px" }} />
                            Dashboard
                        </a>
                    </li>
                </ul>

                <ul className="mt-2">
                    <li className="py-2">
                        <a
                            href="/supervisor/project"
                            className={"flex items-center text-white font-sans hover:bg-neutral-700 transition-all duration-200 h-10 w-full "+(location.pathname==='/supervisor/project'?'border-l-4 border-white':'')}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <img src={iconProject} alt="Grid Icon" className="mr-5 ml-10" style={{ width: "20px", height: "20px" }} />
                            Project
                        </a>
                    </li>
                </ul>

                <ul className="mt-2">
                    <li className="py-2">
                        <a
                            href="/supervisor/reimburse"
                            className={"flex items-center text-white font-sans hover:bg-neutral-700 transition-all duration-200 h-10 w-full "+(location.pathname==='/supervisor/reimburse'?'border-l-4 border-white':'')}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <img src={iconReimburse} alt="Grid Icon" className="mr-5 ml-10" style={{ width: "20px", height: "20px" }} />
                            Reimburst
                        </a>
                    </li>
                </ul>

                <ul className="mt-2">
                    <li className="py-2">
                        <a
                            href="/supervisor/riwayat"
                            className={"flex items-center text-white font-sans hover:bg-neutral-700 transition-all duration-200 h-10 w-full "+(location.pathname==='/supervisor/riwayat'?'border-l-4 border-white':'')}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <img src={iconRiwayat} alt="Grid Icon" className="mr-5 ml-10" style={{ width: "20px", height: "20px" }} />
                            Riwayat
                        </a>
                    </li>
                </ul>

                <ul className="mt-2">
                    <li className="py-2">
                        <a
                            href="/supervisor/approve"
                            className={"flex items-center text-white font-sans hover:bg-neutral-700 transition-all duration-200 h-10 w-full "+(location.pathname==='/supervisor/approve'?'border-l-4 border-white':'')}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <img src={iconApprove} alt="Grid Icon" className="mr-5 ml-10" style={{ width: "20px", height: "20px" }} />
                            Approve
                        </a>
                    </li>
                </ul>

                
            </div>
        </div>
    );
};

export default SidebarSV;
