'use client'
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
// import { useEffect } from 'react'

const PageLocalizer = () => {
    const router = useRouter();
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter((segment) => segment !== '')

    // Verifica si la página actual es la de inicio (index.js)
    const isHomePage = pathname === '/';
    // console.log(isHomePage)
    // useEffect(() => {
    //     console.log('in useEffect')
    //   })
    return (
        <span className="PageLocalizer" key="">
            {isHomePage && (
                <span className='text-black capitalize font-semibold'>
                    Home
                </span>
            )}
            {pathSegments.map((segment, index) => (
                <div className='text-black capitalize font-semibold' key="">
                    <span key={index}>
                        {segment}
                    </span>
                </div>
            ))}
        </span>
    );
};

export default PageLocalizer;
