import { combineReducers } from "@reduxjs/toolkit";
import userReducer, { userAPI } from "./User";
import counterReducer from "./Counter";

export const combinedReducer = combineReducers({
  ...userReducer,
  ...counterReducer,
});

export const combinedMiddleware = userAPI.middleware;
