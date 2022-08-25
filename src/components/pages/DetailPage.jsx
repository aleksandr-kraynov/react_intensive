import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoctail, selectCoctail } from '../../redux/reducers/detailPageSlice';
import Detail from '../Detail/Detail';

function DetailPage() {    
    const dispatch = useDispatch();
    const {id} = useParams();
    const {status, error, coctail} = useSelector(selectCoctail);

    useEffect(() => {
      dispatch(fetchCoctail(id));      
    }, [dispatch, id]);  

    if (status === 'loading') {
      return <div className='status'>Загрузка...</div>;
    } else if (status === 'rejected') { 
      return <div className='status'>Ошибка: {error.message}</div>
    } else {
      return (
        <div className='wrapper'>      
          <Detail item={coctail} />        
        </div>   
      );
    }    
  }

export default DetailPage;