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

        <header className="sticky top-0" >
            <div className="w-full h-16 bg-white justify-between text-text inline-flex shadow">
                <button
                    className="md:hidden text-black text-xl focus:outline-none px-6"
                    onClick={toggleSidebar}
                >
                    ☰
                </button>
                <h1 className="flex items-center p-4 font-semibold"><PageLocalizer/></h1>
                <Search />
                <div className="flex items-center p-4 gap-2">
                    <div className='m-2'><FullScreenIcon /></div>
                    <div className='m-2'><NotificationIcon /></div>
                    <Image src="/LogoSena.png" alt="" className='cursor-pointer' width={55} height={55} />
                </div>
            </div>
        </header>
    );
}

export default Header;