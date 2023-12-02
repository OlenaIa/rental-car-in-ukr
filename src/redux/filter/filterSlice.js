import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
    brand: { value: 'all', label: 'Enter the text' },
    toPrice: { value: 'all', label: 'To $' },
    mileageFrom: 0,
    mileageTo: 0,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        brandSet(state, {payload}) {
            state.brand = payload;
        },
        toPriceSet(state, { payload }) {
            state.toPrice = payload;
        },
        mileageFromSet(state, { payload }) {
            state.mileageFrom = payload;
        },
        mileageToSet(state, { payload }) {
            state.mileageTo = payload;
        }
    },
    });

export const filterReducer = filterSlice.reducer;

export const { brandSet, toPriceSet, mileageFromSet, mileageToSet} = filterSlice.actions;
