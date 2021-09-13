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
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { combinedReducer, combinedMiddleware } from "./Modules";

export const makeStore = ({ isServer }: any) => {
  /* istanbul ignore else */
  if (typeof isServer === undefined || isServer) {
    isServer = typeof window === "undefined";
  }

  /* istanbul ignore else */
  if (isServer) {
    //If it's on server side, create a store
    return configureStore({
      reducer: combinedReducer,
      middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware().concat(combinedMiddleware),
    });
  } else {
    /* istanbul ignore next */
    const storage = require("redux-persist/lib/storage").default;

    /* istanbul ignore next */
    const persistConfig = {
      key: "root",
      version: 1,
      whitelist: ["counter"],
      storage,
    };

    /* istanbul ignore next */
    const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

    /* istanbul ignore next */
    const store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(combinedMiddleware),
    });

    /* istanbul ignore next */
    store.__persistor = persistStore(store);

    /* istanbul ignore next */
    return store;
  }
};

export const wrapper = createWrapper<any>(makeStore);
