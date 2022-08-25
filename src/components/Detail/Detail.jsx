import React from 'react';
import './Detail.scss'
import './Detail.scss';
import { useNavigate } from 'react-router-dom';

function Detail({item}) {     
    const navigate = useNavigate();             
    
    return (
        <main className="main">
            <div className="container container__detail">  
                <section className='detail'>
                    <button className="button__navigate button" onClick={() => navigate(-1)}></button> 
                    <div className='detail__image-wrapper'>
                        <img className='detail__image' src={item.image} />
                    </div>    
                    <div className="container">
                        <div className='detail__description'>
                            <h3 className='detail__title'>
                                {item.name}
                            </h3>
                            <h4 className='detail__subtitle'>
                                {item.description}
                            </h4>
                        </div>   
                        <div className='detail__ingredients'>
                            <p className='detail__ingredients-title'>Ингредиенты</p>
                            <div className='detail__ingredients-content'>                               
                                {item.ingredients?.map(item => (
                                    <div className='detail__ingredients-list' key={item.ingredient}><span className='detail__ingredients-item'>{item.ingredient}</span> <span className='detail__ingredients-value'>{item.quantity}</span></div>
                                ))}                                                                                     
                            </div>
                        </div> 
                        <div className='detail__recipe'>
                            <p className='detail__recipe-title'>Как готовить</p>
                            {item.recipe}
                        </div> 
                    </div>                    
                </section>                         
            </div> 
        </main>
    );
}


export default React.memo(Detail);