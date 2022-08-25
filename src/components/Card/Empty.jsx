import React from 'react';
import './Card.scss';
import empty  from '@image/empty.png'


function Empty() {   

    return (        
        <article className='card'> 
            <div className='card__image-wrapper'>
                <img className='card__image' src={ empty } alt="Ничего не найдено"/>  
            </div>       
                <h2 className='card__title card__empty-title'>
                    Ничего не найдено
                </h2>                                   
            <div className='card__description'>              
                <h3 className='card__title'>
                    Пусто
                </h3>
                <h4 className='card__subtitle'>
                    Попробуйте изменить запрос
                </h4>
            </div>                            
        </article>         
    );
}

export default React.memo(Empty);