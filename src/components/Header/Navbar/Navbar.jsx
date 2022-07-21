import React from 'react';
import '@components/Header/Navbar/Navbar.scss';

function Navbar() {
    return (
        <ul className='navbar'>
            <li className='navbar-button'>Новинки</li>           
            <li className='navbar-button'>Сладкие</li>           
            <li className='navbar-button'>Хит</li>           
            <li className='navbar-button'>Крепкие</li>           
        </ul>
    );
}

export default Navbar;