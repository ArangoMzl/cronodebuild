'use client'
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
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
                    <Link href="/" className='float-left items-center pt-1 pr-1'>
                        <AiOutlineHome />
                    </Link>
                )}
                {pathSegments.map((segment, index) => (
                    <div className='text-green-600  px-1 capitalize' key="">
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
