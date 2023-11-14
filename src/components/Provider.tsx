
import {Provider as ReduxProvider} from "react-redux";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import {persistor, store} from "@/store/store";

interface Props{
    children: React.ReactNode;
}
export const ReduxProviders = (props: Props) => {
    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            {props.children}
            </PersistGate>
        </ReduxProvider>
    );
}
