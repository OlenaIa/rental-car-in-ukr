import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { getCarsThunk, getAllCarsThunk, getFilterCarsThunk } from './fetchCar';
// import { nanoid } from 'nanoid'

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

const arrOfActs = [getAllCarsThunk, getCarsThunk, getFilterCarsThunk];

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
                const brands = payload?.map(car => car.make);
                const uniqueBrands = brands.filter(
                    (brand, index, array) => array.indexOf(brand) === index
                );
                const uniqueBrandsObj = [{ value: 'all', label: 'All Brands' }, ...uniqueBrands.map(brand => {return { value: brand, label: brand }})];
                state.carsBrands = uniqueBrandsObj;
                state.error = null;
            })
            .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.cars = [...state.cars, ...payload];
                state.error = null;
            })
            .addCase(getFilterCarsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.cars = payload;
                state.error = null;
            })
            .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
            .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected)
    }
});

export const carsReducer = carsSlice.reducer;
