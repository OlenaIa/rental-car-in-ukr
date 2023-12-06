import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
    getCarsThunk,
    getAllCarsThunk,
} from './fetchCar';
import { makeUniqueBrandsState } from 'service/serviceFunc';

const carsInitialState = {
    cars: [],
    allCars: [],
    carsBrands: [],
    isLoading: false,
    error: null,
};

const onPending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const onRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const arrOfActs = [
    getAllCarsThunk,
    getCarsThunk,
];

const addStatusToActs = status =>
    arrOfActs.map((el) => el[status]);

const carsSlice = createSlice({
    name: 'cars',
    initialState: carsInitialState,
    extraReducers: builder => {
        builder
            .addCase(getAllCarsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.allCars = payload;
                state.carsBrands = makeUniqueBrandsState(payload);
                state.error = null;
            })
            .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.cars = [...state.cars, ...payload];
                state.error = null;
            })
            .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
            .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected)
    }
});

export const carsReducer = carsSlice.reducer;
