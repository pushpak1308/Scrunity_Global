import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slice/userSlice';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        user:userReducer
    },
    
    // middleware,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})