import {configureStore} from '@reduxjs/toolkit';
import {authapiSlice} from './api/apiSlice';
import { authReducer } from './api/authApiSlice';

export const store = configureStore({
    reducer:{
        [authapiSlice.reducerPath]: authapiSlice.reducer,
        auth: authReducer,
        middleware: (getDefaultMiddleware) =>{
            return getDefaultMiddleware().concat(authapiSlice.middleware);
        }
    }
})