import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getHello = createAsyncThunk(
    'hello/getHello',
    async () => {
        const response = await axios.get('http://localhost:3000/api/v1/hello', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                },
            });
        return response.data;
    }
);

export default getHello;
