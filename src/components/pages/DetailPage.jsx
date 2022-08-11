import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoctail } from '../../redux/reducers/detailPageSlice';
import Detail from '../Detail/Detail';

function DetailPage() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {status, error} = useSelector(state => state.coctail)

    useEffect(() => {
      dispatch(fetchCoctail(id));      
    }, [dispatch, id]);

    const item = useSelector((state) => state.coctail.coctail); 

    return (
      <div className='wrapper'>            
        {status === 'loading' && <div className='status'>Загрузка...</div>}
        {error && <div className='status'>Ошибка: {error.message}</div>} 

        <Detail item={item} />        
      </div>   
    );
  }

export default DetailPage;  