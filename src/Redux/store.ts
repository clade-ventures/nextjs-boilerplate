import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { combinedReducer, combinedMiddleware } from "./Modules";

export const makeStore = ({ isServer }: any) => {
    if (typeof isServer == "undefined") {
        isServer = typeof window === "undefined";
    }

    if (isServer) {
        //If it's on server side, create a store
        return configureStore({
            reducer: combinedReducer,
        });
    } else {
        //If it's on client side, create a store which will persist
        // const storage = storage.default

        const persistConfig = {
            key: "root",
            version: 1,
            whitelist: ["counter"],
            storage,
        };

        const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

        const store: any = configureStore({
            reducer: persistedReducer,
            middleware: (getDefaultMiddleware: any) =>
                getDefaultMiddleware({
                    serializableCheck: {
                        ignoredActions: [
                            FLUSH,
                            REHYDRATE,
                            PAUSE,
                            PERSIST,
                            PURGE,
                            REGISTER,
                        ],
                    },
                }).concat(combinedMiddleware),
        });

        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

        return store;
    }
};

export const wrapper = createWrapper<any>(makeStore);
