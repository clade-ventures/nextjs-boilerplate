import { combineReducers } from "redux";

import { CounterReducer } from "./Counter";

export default combineReducers({
    counter: CounterReducer,
});
