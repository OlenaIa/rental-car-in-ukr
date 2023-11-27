import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { getCarsThunk } from './fetchCar';

const carsInitialState = {
    cars: [],
    isLoading: false,
    error: null,
    // isContactAdd: false,
};

const onPending = (state) => {
    state.isLoading = true;
    state.error = null;
    // state.isContactAdd = false;
};

const onRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
    // state.isContactAdd = false;
};

const arrOfActs = [getCarsThunk];

const addStatusToActs = status =>
    arrOfActs.map((el) => el[status]);

const carsSlice = createSlice({
    name: 'cars',
    initialState: carsInitialState,
    extraReducers: builder => {
        builder
            .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.cars = payload;
                state.error = null;
            })
            // .addCase(postContactThunk.fulfilled, (state, { payload }) => {
            //     state.isLoading = false;
            //     state.contacts = [...state.contacts, payload]
            //     state.error = null;
            //     state.isContactAdd = true;
            // })
            // .addCase(delContactThunk.fulfilled, (state, { payload }) => {
            //     state.isLoading = false;
            //     state.contacts = state.contacts.filter(contact => contact.id !== payload.id)
            //     state.error = null;
            // })
            .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
            .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected)
    }
});

export const carsReducer = carsSlice.reducer;
