import { createSlice } from "@reduxjs/toolkit";

import { IReduxCounter } from "@Interfaces";

const reducerName = "counter";

export const initialState: IReduxCounter.IInitialState = {
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
export const counterSliceReducer = { [reducerName]: counterSlice.reducer };
