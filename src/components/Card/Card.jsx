import React from 'react';
import './Card.scss';
import { NavLink } from 'react-router-dom';

function Card(props) {
    return (
        <NavLink key={props.item.id} to={`/detail/${props.item.id}`}>
            <article className='card'> 
                <div className='card__image-wrapper'>
                    <img className='card__image' src={props.item.image} alt="Изображение напитка"/>  
                </div>                                                  
                <div className='card__description'>
                    <h3 className='card__title'>
                        {props.item.name}
                    </h3>
                    <h4 className='card__subtitle'>
                        {props.item.description}
                    </h4>
                </div>  
                <div className='card__degree'>
                    <p className='card__degree-value'>{props.item.alcohol}%</p>
                    <p className='card__degree-title'>Алкоголь</p>
                </div>          
            </article>
        </NavLink>
        
    );
}

export default React.memo(Card);