import { configureStore } from '@reduxjs/toolkit';
import { helloSlice } from './helloSlice';

const store = configureStore({
    reducer: {
        hello: helloSlice.reducer
    }
});

export default store;