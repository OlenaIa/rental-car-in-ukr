import { configureStore } from '@reduxjs/toolkit'
import { carsReducer } from './cars/carsSlice';
import { favoriteCarsPersistReducer } from './favoriteCarsSlice/favoriteCarsSlice';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        favoriteCars: favoriteCarsPersistReducer,
    //     filter: filterSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);