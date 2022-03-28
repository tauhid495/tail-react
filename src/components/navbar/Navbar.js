import React, { useState } from 'react';
import Link from '../link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routs = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Product', link: '/Product' },
        { id: 3, name: 'Gallary', link: '/Gallary' },
        { id: 4, name: 'ContuctUs', link: '/ContuctUs' },
    ]
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon /> : <MenuIcon />}
            </div>
            <ul className={`md:flex justify-center duration-500 ease-in absolute ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routs.map(route => <Link key={route.id} route={route} />)
                }
            </ul>
        </nav>
    );
};

export default Navbar;