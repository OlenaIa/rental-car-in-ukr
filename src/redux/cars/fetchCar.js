import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://64ecb723f9b2b70f2bfad3ff.mockapi.io';
// const url = new URL('https://PROJECT_TOKEN.mockapi.io/tasks');
// url.searchParams.append('completed', false); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false

export const options = {
    width: '400px',
    position: 'center-center',
    timeout: 1500,
    fontSize: '20px',
};

const getFirstCars = async (_, thunkAPI) => {
    try {
        const response = await axios.get('/adverts?page=1&limit=12');
return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const getCars = async (_, thunkAPI) => {
    try {
        const response = await axios.get('/adverts');
return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

// const postContact = async (newContact, thunkAPI) => {
//     try {
//         const response = await axios.post('/contacts', newContact);
//         Notify.success(`Contact added successfully`, options);
//         return response.data;
//     }
//     catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//     }
// };

// const delContact = async (contactId, thunkAPI) => {
//     try {
//         const response = await axios.delete(`/contacts/${contactId}`);
//                     Notify.warning(`Contact delete successfully`, options);
// return response.data;
//     }
//     catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//     }
// };

export const getCarsThunk = createAsyncThunk(
    'cars/getCars',
    getCars
);
export const getFirstCarsThunk = createAsyncThunk(
    'cars/getFirstCars',
    getFirstCars
);


// export const postContactThunk = createAsyncThunk(
//     'phoneBook/postContact',
//     postContact
// );
    
// export const delContactThunk = createAsyncThunk(
//     'phoneBook/delContact',
//     delContact
// );
