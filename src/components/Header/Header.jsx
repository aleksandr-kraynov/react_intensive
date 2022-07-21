import React from 'react';
import logo from '@image/logo.svg';
import './Header.scss';
import Title from './Title/Title';
import Navbar from './Navbar/Navbar';

function Header() {
    return (        
        <header className="header">
            <div className="header__container">
                <Title />              
                <div className="header__logo">
                    <a href="/">
                        <img src={logo} alt="Логотип компании"/>
                    </a>
                </div>
                <Navbar />
            </div>            
        </header>         
    );
}

export default Header;