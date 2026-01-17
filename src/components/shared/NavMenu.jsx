import Link from 'next/link';
import React from 'react';

const NavMenu = ({ route, text, font, color, size, bgColor, hoverBgColor, hoverTextColor }) => {
    return (
        <Link href={route} className={`${size} ${hoverBgColor} ${hoverTextColor} transition-all duration-300 py-2 px-4 rounded-lg`}>{text}</Link>
    );
};

export default NavMenu;