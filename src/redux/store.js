import { configureStore } from '@reduxjs/toolkit';
import coctailsSlice from './reducers/filterSlice';


export const store = configureStore({
    reducer: {
      coctails: coctailsSlice,      
    }
  })