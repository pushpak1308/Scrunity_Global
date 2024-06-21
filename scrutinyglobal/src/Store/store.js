import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Slice/counterSlice';
import userReducer from './Slice/userSlice';
import logger from 'redux-logger';

// const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user:userReducer
    },
    // middleware,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})