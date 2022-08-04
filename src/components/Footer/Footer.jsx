import React from 'react';
import { useContext } from 'react';
import './Footer.scss';
import { Context } from '../../App'

function Footer() {
    const { setValue } = useContext(Context);
    
    return (
        <footer className="footer">
            <div className="container">                
                <input className="search" placeholder='Поиск' onChange={(event) => setValue(event.target.value)}></input>                              
            </div>         
        </footer>
    );
}

export default Footer;