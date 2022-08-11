import React from 'react';
import './Detail.scss'
import './Detail.scss';
import { useNavigate } from 'react-router-dom';

function Detail(props) {     
    const navigate = useNavigate();             
    
    return (
        <main className="main">
            <div className="container container__detail">  
                <section className='detail'>
                    <button className="button__navigate button" onClick={() => navigate(-1)}></button> 
                    <div className='detail__image-wrapper'>
                        <img className='detail__image' src={props.item.image} />
                    </div>    
                    <div className="container">
                        <div className='detail__description'>
                            <h3 className='detail__title'>
                                {props.item.name}
                            </h3>
                            <h4 className='detail__subtitle'>
                                {props.item.description}
                            </h4>
                        </div>   
                        <div className='detail__ingredients'>
                            <p className='detail__ingredients-title'>Ингредиенты</p>
                            <div className='detail__ingredients-content'>                               
                                {props.item.ingredients?.map(item => (
                                    <div className='detail__ingredients-list'><span className='detail__ingredients-item'>{item.ingredient}</span> <span className='detail__ingredients-value'>{item.quantity}</span></div>
                                ))}                                                                                     
                            </div>
                        </div> 
                        <div className='detail__recipe'>
                            <p className='detail__recipe-title'>Как готовить</p>
                            {props.item.recipe}
                        </div> 
                    </div>                    
                </section>                         
            </div> 
        </main>
    );
}


export default Detail;