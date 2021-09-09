import { combineReducers } from "redux";
import userReducer, { userAPI } from "./User";
import counterReducer from "./Counter";

export const combinedReducer = combineReducers({
    ...userReducer,
    ...counterReducer,
});

export const combinedMiddleware = [userAPI.middleware];
