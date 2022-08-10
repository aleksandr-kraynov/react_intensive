import React from 'react';
import '@components/Header/Navbar/Navbar.scss';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { categoryNew, categoryAll, categorySweet, categoryTop, categoryStrong } from '../../../redux/reducers/filterSlice';

function Navbar({category}) {    
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    const dispatch = useDispatch();    
       
    useEffect(() => {
        switch(activeItem) {            
            case 0: 
                dispatch(categoryNew()); 
            break; 
            case 1: 
                dispatch(categorySweet()); 
            break; 
            case 2: 
                dispatch(categoryTop()); 
            break; 
            case 3: 
                dispatch(categoryStrong()); 
            break; 
            default:
                dispatch(categoryAll()); 
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