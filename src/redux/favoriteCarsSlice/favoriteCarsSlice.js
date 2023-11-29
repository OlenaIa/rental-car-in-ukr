import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createSlice } from '@reduxjs/toolkit';

const favoriteCarsInitialState = {
    favorites: [],
};

export const favoriteCarsSlice = createSlice({
    name: 'favoriteCars',
    initialState: favoriteCarsInitialState,
    reducers: {
        addFavoriteCar(state, { payload }) {
            state.favorites.push(payload);
        },
        deleteFavoriteCar(state, { payload }) {
            const index = state.favorites.findIndex(car => car === payload);
            state.favorites.splice(index, 1);
        }
    },
    });

const persistConfig = {
    key: 'favoriteCars',
    storage,
    whitelist: ['favorites']
};

export const favoriteCarsPersistReducer = persistReducer(
    persistConfig,
    favoriteCarsSlice.reducer
);

export const { addFavoriteCar, deleteFavoriteCar } = favoriteCarsSlice.actions;
