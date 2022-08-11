import { configureStore } from '@reduxjs/toolkit';
import detailPageSlice from './reducers/detailPageSlice';
import coctailsSlice from './reducers/filterSlice';


export const store = configureStore({
    reducer: {
      coctails: coctailsSlice, 
      coctail: detailPageSlice
    }
  })