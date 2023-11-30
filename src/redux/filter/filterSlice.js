import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
    brand: { value: 'all', label: 'Enter the text' },
    page: 1,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        brandSet(state, {payload}) {
            state.brand = payload;
        },
        pageSet(state, {payload}) {
            console.log('payload', payload);
            state.page = 2;
        },
    },
    });

export const filterReducer = filterSlice.reducer;

export const { brandSet, pageSet } = filterSlice.actions;
