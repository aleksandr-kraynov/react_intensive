import React from 'react';
import '@components/Header/Navbar/Navbar.scss';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../../App'

function Navbar({category}) {    
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    const {categoryAll} = useContext(Context);
    const {categoryNew} = useContext(Context);
    const {categorySweet} = useContext(Context);
    const {categoryTop} = useContext(Context);
    const {categoryStrong} = useContext(Context);
       
    useEffect(() => {
        switch(activeItem) {            
            case 0: 
                categoryNew(); 
            break;
            case 1: 
                categorySweet(); 
            break;
            case 2: 
                categoryTop(); 
            break;
            case 3: 
                categoryStrong(); 
            break;
            default:
                categoryAll(); 
        }               
    }, [activeItem])

    return (
        <ul className='navbar'>
            <li className={activeItem === null ? 'navbar-button active' : 'navbar-button'} onClick={() => onSelectItem(null)}>Все</li>            
            {category.map((name, index) => (
                <li key={index} className={activeItem === index ? 'navbar-button active' : 'navbar-button'} onClick={() => onSelectItem(index)} >{name}</li>
            ))}        
        </ul>
    );
}

export default Navbar;