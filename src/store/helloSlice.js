import { createSlice } from '@reduxjs/toolkit';
import getHello from '../services/hello.service';

export const helloSlice = createSlice({
    name: 'hello',
    initialState: {
        greeting: [],
        isLoading: false,
        isError: false,
    },
    extraReducers: {
        [getHello.fulfilled]: (state, action) => {
            state.greeting = action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        [getHello.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [getHello.rejected]: (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
});

export default helloSlice.reducer;