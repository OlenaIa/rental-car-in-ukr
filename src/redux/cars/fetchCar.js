import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://64ecb723f9b2b70f2bfad3ff.mockapi.io';

export const LIMIT = 12;
// export const options = {
//     width: '400px',
//     position: 'center-center',
//     timeout: 1500,
//     fontSize: '20px',
// };

const getAllCars = async (_, thunkAPI) => {
    try {
        const response = await axios.get('/adverts');
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const getCars = async (page, thunkAPI) => {
    try {
        const response = await axios.get(`/adverts?page=${page}&limit=${LIMIT}`);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const getFilterCars = async ({filterBrand, page}, thunkAPI) => {
    try {
        
        const endPoint = (filterBrand.value === 'all') ? `page=${page}&limit=${LIMIT}` : `make=${filterBrand.value}`;
        console.log('filterBrand in getFilterCars', filterBrand);
        console.log('page in getFilterCars', page);
        console.log('endPoint', endPoint);
        const response = await axios.get(`/adverts?${endPoint}`);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

export const getCarsThunk = createAsyncThunk(
    'cars/getCars',
    getCars
);
export const getAllCarsThunk = createAsyncThunk(
    'cars/getAllCars',
    getAllCars
);
export const getFilterCarsThunk = createAsyncThunk(
    'cars/getFilterCars',
    getFilterCars
);