import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoctails } from '../../redux/reducers/filterSlice';

function DetailPage() {
    // const dispatch = useDispatch();
    // const {status, error} = useSelector(state => state.coctails)

    // useEffect(() => {
    //   dispatch(fetchCoctails());      
    // }, [dispatch]);

    // const items = useSelector((state) => state.coctails.coctails); 

    return (
      <div className='wrapper'>
        <Header />     
        {/* {status === 'loading' && <div className='status'>Загрузка...</div>}
        {error && <div className='status'>Ошибка: {error.message}</div>}  */}

        <div>
        {/* {items.map(item => (
               <p>{item.name}</p>     
        ))}   */}
        </div>
        <Footer />
      </div>   
    );
  }

export default DetailPage;  