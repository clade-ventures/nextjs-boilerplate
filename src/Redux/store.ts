import { createStore, applyMiddleware, AnyAction } from "redux";
import thunkMiddleware from "redux-thunk";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import combinedReducer from "./Reducers";

const reducer = (state: any, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return { ...state, ...action.payload };
        default:
            return combinedReducer(state, action);
    }
};

const bindMiddleware = (middleware: any) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const makeStore = () => {
    const isServer = typeof window === "undefined";
    console.log("isServer : ", isServer);

    if (isServer) {
        //If it's on server side, create a store
        return createStore(reducer, bindMiddleware([thunkMiddleware]));
    } else {
        //If it's on client side, create a store which will persist
        const { persistStore, persistReducer } = require("redux-persist");
        const storage = require("redux-persist/lib/storage").default;

        const persistConfig = {
            key: "e60bb998ea0252d928b88d940c3e1852fa528e0c5a5510cda3f2c81434b19ab6",
            whitelist: ["counter"],
            storage,
        };

        const persistedReducer = persistReducer(persistConfig, reducer);

        const store: any = createStore(
            persistedReducer,
            bindMiddleware([thunkMiddleware])
        );

        store.__persistor = persistStore(store);

        return store;
    }
};

export const wrapper = createWrapper(makeStore);
