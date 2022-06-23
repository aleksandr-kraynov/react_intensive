import React from 'react';
import logo from '@image/logo.svg';
import './Header.scss';

function Header() {
    return (        
        <header className="header">
            <div className="header__container">
                <div className="header__aside">
                    <p className="header__title">Главная</p>
                    <p className="header__date">17 июля 2021</p>
                </div>               
                <div className="header__logo">
                    <a href="/">
                        <img src={logo} alt="Логотип компании"/>
                    </a>
                </div>
                <ul className='header__navbar'>
                    <li className='header__navbar-button'>Новинки</li>           
                    <li className='header__navbar-button'>Сладкие</li>           
                    <li className='header__navbar-button'>Хит</li>           
                    <li className='header__navbar-button'>Крепкие</li>           
                </ul>
            </div>            
        </header>         
    );
}

export default Header;