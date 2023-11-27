import { configureStore } from '@reduxjs/toolkit'
import { carsReducer } from './cars/carsSlice';
// import { filterSlice } from './filterSlice'

export const store = configureStore({
    reducer: {
        cars: carsReducer,
    //     filter: filterSlice.reducer,
    },
});