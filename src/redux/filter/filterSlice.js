import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
    filter: null,
    filterCars: [],
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        filterSet(state, { payload }) {
            state.filter = payload;
        },
        filterDelete(state, { payload }) {
            state.filter = null;
        },
        filterCarsSet(state, { payload }) {
            state.filterCars = payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;

export const { filterSet, filterCarsSet, filterDelete} = filterSlice.actions;
