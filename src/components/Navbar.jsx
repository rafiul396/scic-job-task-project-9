import Image from 'next/image';
import React from 'react';
import NavMenu from './shared/NavMenu';

const Navbar = () => {
    return (
        <div>
            <header>
                <div className='bg-(--secondary)'>
                    <div className='flex justify-between items-center py-4 px-4'>
                        <div>
                            {/* <Image src="/rafiul.jpg" alt="logo" width={80} height={80} /> */}
                            <h1 className='text-3xl'>Logo</h1>
                        </div>
                        <div>
                            <button>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
                <div className='py-3'>
                    <nav className='text-center'>
                        <ul className='space-x-8'>
                            <NavMenu route="/home" text={'Home'} size={'text-xl'} hoverBgColor={'hover:bg-(--secondary)'} hoverTextColor='hover:text-(--background)' />
                            <NavMenu route="/" text={'Product'} size={'text-xl'} hoverBgColor={'hover:bg-(--secondary)'} hoverTextColor='hover:text-(--background)' />
                            <NavMenu route="#" text={'About'} size={'text-xl'} hoverBgColor={'hover:bg-(--secondary)'} hoverTextColor='hover:text-(--background)' />
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;