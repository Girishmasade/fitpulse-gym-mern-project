import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './api/apiSlice';
import  authReducer from './api/authApiSlice';
import chatStoreSlice from './api/chatStoreSlice'
import subscriptionStoreSlice from './api/subscriptionStoreSlice'

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        chat: chatStoreSlice,
        subscription: subscriptionStoreSlice
    },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(apiSlice.middleware)
})