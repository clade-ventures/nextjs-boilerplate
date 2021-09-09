import { createSlice } from "@reduxjs/toolkit";
import { reducerName } from "../User/user.const";

import ICounter from "./counter";

export const initialState: ICounter.IInitialState = {
    countNumber: 0,
};

export const counterSlice = createSlice({
    name: reducerName,
    initialState,
    reducers: {
        increment: (state: any) => {
            state.countNumber += 1;
        },
        decrement: (state: any) => {
            state.countNumber -= 1;
        },
        reset: (state: any) => {
            state.countNumber = 0;
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
