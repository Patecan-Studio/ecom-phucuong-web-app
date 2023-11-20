import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartSlice } from "./cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; //
import { getDefaultMiddleware } from '@reduxjs/toolkit';// defaults to localStorage for the web


const cartPersistConfig = {
    key: 'cart',
    storage,
};

const rootReducer = {
    cart: persistReducer(cartPersistConfig, cartSlice.reducer),
    // Add other reducers here if needed
};

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
