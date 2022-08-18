import React, { useEffect } from 'react';
import Card from '@components/Card/Card';
import './List.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoctails } from '../../redux/reducers/filterSlice';

function List() {    
    const dispatch = useDispatch();
    const {status, error, coctails} = useSelector(state => state.coctails)

    useEffect(() => {
      dispatch(fetchCoctails());      
    }, [dispatch]);

    
    if (status === 'loading') {
        return <div className='status'>Загрузка...</div>;
    } else if (status === 'rejected') { 
        return <div className='status'>Ошибка: {error.message}</div>
    } else {    
    return (
        <main className="main">
            <div className="container">   
                <section className='cards'>
                {coctails.map(item => (
                    <Card key={item.id} item={item}/> 
                ))}                                                                                      
                </section>                         
            </div>
        </main>
    );
    }
}

export default List;