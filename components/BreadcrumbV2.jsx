'use client'
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
// import { useEffect } from 'react'

const Breadcrumbs = () => {
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
        <span className="breadcrumbs" key="">
            {!isHomePage && (
                <Link href="/">
                    Home
                </Link>
            )}
            {pathSegments.map((segment, index) => (
                <div className='text-green-600 display inline-flex px-1' key="">
                    <span key={index}>
                        {' / '}
                        {segment}
                    </span>
                </div>
            ))}
        </span>
    );
};

export default Breadcrumbs;
