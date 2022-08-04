import React, { useContext } from 'react';
import Card from '@components/Card/Card';
import './List.scss';
import { Context } from '../../App';

function List() {
    const {error} = useContext(Context);
    const {isLoaded} = useContext(Context);    
    const {filtered} = useContext(Context);
    
    if (error) {
    return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {     
        return <div className='loading'>Загрузка...</div>               
    } else {            
        return (
            <main className="main">
                <div className="container">   
                    <section className='cards'>
                    {filtered.map(item => (
                        <Card item={item}/> 
                    ))}                                                                                      
                    </section>                         
                </div>
            </main>
        );
    }
}

export default List;