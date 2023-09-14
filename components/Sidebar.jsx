'use client'
import { createContext, useContext, useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import Logo from "./icons/Logo";
import MenuIcon from "./icons/MenuIcon";
import HomeIcon from "./icons/HomeIcon";
import UserIcon from "./icons/UserIcon";
import CalendarIcon from "./icons/CalendarIcon";
import SettingsIcon from "./icons/SettingsIcon";
import DownloadIcon from "./icons/DownloadIcon";
import LogoutIcon from "./icons/LogoutIcon";
import { useSidebar } from '../context/SidebarContext';
import { cn } from '@/lib/utils';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const menuItems = [
    { id: 1, label: "Home", icon: HomeIcon, link: "/" },
    { id: 2, label: "Perfil", icon: UserIcon, link: "/perfil" },
    { id: 3, label: "Horarios", icon: CalendarIcon, link: "/horarios" },
    { id: 4, label: "Ajustes", icon: SettingsIcon, link: "/ajustes" },
    { id: 5, label: "Descarga", icon: DownloadIcon, link: "/descarga" },
]

function Sidebar() {
    const [toggleCollapse, setToggleCollapse] = useState(false)
    const [isCollapsible, setIsCollapsible] = useState(false)

    const router = useRouter()
    const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname), [router.pathname])

    const wrapperClasses = classNames("h-screen px-4 pt-4 pb-4 bg-gray-50 flex justify-between flex-col text-black relative shadow",
        {
            ['w-72']: !toggleCollapse,
            ['w-20']: toggleCollapse,
        }
    )

    const menuIconClasses = classNames("p-2 text-green-500 rounded-lg absolute right-0 hover:bg-gray-200 hover:rotate-180 duration-700",
        {
            "bg-gray-50": toggleCollapse,
        }
    )

    const getNavItemClasses = (menu) => {
        return classNames("flex item-center cursor-pointer hover:bg-green-500 rounded w-full overflow-hidden whitespace-nowrap hover:text-white text-green-500",
            {
                ["bg-gray-200"]: activeMenu && menu && activeMenu.id === menu.id,
            }
        )
    }

    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible)
    }

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse)
    }

    const { isSidebarOpen } = useSidebar();

    return (
        <TooltipProvider delayDuration={0.2}>
            <div className={` ${isSidebarOpen ? 'blur-bg fixed w-full h-full' : ''}`}>
                <aside className={cn(isSidebarOpen ? 'block' : 'hidden', 'h-full md:block')}>
                    <div className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver} style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between relative">
                                <div className="flex items-center pl-1">
                                    <Logo />
                                    <span className={classNames('text-lg font-semibold text-slate-800 pl-2', {
                                        hidden: toggleCollapse,
                                    })}>
                                        Cronode
                                    </span>
                                </div>
                                {isCollapsible && (<button className={menuIconClasses} onClick={handleSidebarToggle}>
                                    <MenuIcon />
                                </button>)}
                            </div>
                            <div className="flex flex-col items-start mt-4">
                                {menuItems.map(({ icon: Icon, ...menu }) => {
                                    const classes = getNavItemClasses(menu)
                                    return (
                                        <div className={classes} key={menu.id}>
                                            {toggleCollapse ? (
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                    <Link href={menu.link}>
                                                        <div className="flex py-4 px-3 items-center w-full h-full">
                                                            <div style={{ width: "2.5rem" }}>
                                                                <Icon />
                                                            </div>
                                                        </div>
                                                        </Link>
                                                        <TooltipContent>{menu.label}</TooltipContent>
                                                    </TooltipTrigger>
                                                </Tooltip>
                                            ) : (
                                                <Link href={menu.link} className="flex py-4 px-3 items-center w-full h-full">
                                                    <div style={{ width: "2.5rem" }}>
                                                        <Icon />
                                                    </div>
                                                    {!toggleCollapse && (
                                                        <span
                                                            className={classNames(
                                                                "text-md font-medium text-slate-800"
                                                            )}
                                                        >
                                                            {menu.label}
                                                        </span>
                                                    )}
                                                </Link>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={`${getNavItemClasses({})} px-3 py-4`}>
                            <div>
                                <LogoutIcon />
                            </div>
                            {!toggleCollapse && (
                                <span className={classNames("text-md font-semibold px-4 text-slate-800")}>
                                    Logout
                                </span>
                            )}
                        </div>
                    </div>
                </aside>
            </div>
        </TooltipProvider>
    );
}

export default Sidebar;