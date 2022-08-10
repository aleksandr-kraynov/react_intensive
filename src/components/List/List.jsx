import React, { useEffect } from 'react';
import Card from '@components/Card/Card';
import './List.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoctails } from '../../redux/reducers/filterSlice';

function List() {    
    const dispatch = useDispatch();
    const {status, error} = useSelector(state => state.coctails)

    useEffect(() => {
      dispatch(fetchCoctails());      
    }, [dispatch]);

    const items = useSelector((state) => state.coctails.coctails); 
               
    return (
        <main className="main">
            <div className="container">   
                <section className='cards'>

                {status === 'loading' && <div className='status'>Загрузка...</div>}
                {error && <div className='status'>Ошибка: {error.message}</div>}

                {items.map(item => (
                    <Card item={item}/> 
                ))}                                                                                      
                </section>                         
            </div>
        </main>
    );
    }


export default List;