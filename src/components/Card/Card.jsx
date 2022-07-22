import React from 'react';
import './Card.scss';
import image from '@image/image.png'


function Card() {
    return (
        <article className='card'> 
            <div className='card__image-wrapper'>
                <img className='card__image' src={image} alt="Изображение напитка"/>  
            </div>                                                  
            <div className='card__description'>
                <h3 className='card__title'>
                    Blackberry
                </h3>
                <h4 className='card__subtitle'>
                    Освежающий напиток
                </h4>
            </div>  
            <div className='card__degree'>
                <p className='card__degree-value'>30%</p>
                <p className='card__degree-title'>Алкоголь</p>
            </div>          
        </article>
    );
}

export default Card;