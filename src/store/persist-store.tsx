import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {cartSlice} from "./cartSlice";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer)

export const store = configureStore({
    reducer: persistReducer(persistConfig, cartSlice.reducer),
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch:() => AppDispatch = useDispatch;

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;

