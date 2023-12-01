import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
    brand: { value: 'all', label: 'Enter the text' },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        brandSet(state, {payload}) {
            state.brand = payload;
        },
    },
    });

export const filterReducer = filterSlice.reducer;

export const { brandSet } = filterSlice.actions;
