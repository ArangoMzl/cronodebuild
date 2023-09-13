// components/Breadcrumbs.jsx
'use client'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react'

const Breadcrumbs = () => {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter((segment) => segment !== '');

    // Verifica si la página actual es la de inicio (index.js)
    const isHomePage = router.pathname === '/';
    useEffect(() => {
        console.log('in useEffect')
      })
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
