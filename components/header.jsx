'use client'
import { LayoutDashboard } from "lucide-react"
import { Search } from "./Search";
import FullScreenIcon from "./icons/FullScreenIcon";
import NotificationIcon from "./icons/NotificationIcon";
import Image from 'next/image'
import React from 'react';
import { useSidebar } from '../context/SidebarContext';
import PageLocalizer from "./PageLocalizer";

function Header() {
    const { isSidebarOpen, toggleSidebar } = useSidebar();
    return (

        <header className="sticky top-0 items-center z-10" >
            <div className="w-full h-16 bg-white justify-between text-text inline-flex shadow">
                <button
                    className="lg:hidden text-black text-xl focus:outline-none px-6 -mt-1 pl-4"
                    onClick={toggleSidebar}
                >
                    ☰
                </button>
                <h1 className="flex items-center pl-4 font-semibol relative md:right-0 right-[12%] lg:m-0 m-5"><PageLocalizer/></h1>
                <div className="lg:flex items-center hidden">
                    <Search />
                </div>
                <div className="flex items-center md:p-4 gap-2 pr-1">
                    <div className='m-5 lg:hidden'><Search /></div>
                    <div className='m-2'><button onClick={() => document.getElementById('calendar-container').requestFullscreen()}><FullScreenIcon /></button></div>
                    <div className='m-2'><NotificationIcon /></div>
                    <img src="/LogoSena.png" alt="" className='cursor-pointer w-11' />
                </div>
            </div>
        </header>
    );
}

export default Header;