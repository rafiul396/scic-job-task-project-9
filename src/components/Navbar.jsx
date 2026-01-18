import Image from 'next/image';
import React from 'react';
import NavMenu from './shared/NavMenu';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div>
            <header>
                <div className='bg-(--secondary)'>
                    <div className='flex justify-between items-center py-4 pl-6 lg:pl-20'>
                        <div>
                            {/* <Image src="/rafiul.jpg" alt="logo" width={80} height={80} /> */}
                            <h1 className='text-3xl'>
                                woodenMart
                            </h1>
                        </div>
                        <div className='pr-6 lg:pr-20'>
                            <Link className='py-4 px-8 bg-(--background) cursor-pointer rounded font-semibold text-(--secondary)'
                                    href={"/login"}>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='py-3'>
                    <nav className='text-center'>
                        <ul className='space-x-8'>
                            <NavMenu route="/" text={'Home'} size={'text-xl'} hoverBgColor={'hover:bg-(--secondary)'} hoverTextColor='hover:text-(--background)' />
                            <NavMenu route="/products" text={'Products'} size={'text-xl'} hoverBgColor={'hover:bg-(--secondary)'} hoverTextColor='hover:text-(--background)' />
                            <NavMenu route="/about" text={'About'} size={'text-xl'} hoverBgColor={'hover:bg-(--secondary)'} hoverTextColor='hover:text-(--background)' />
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;