import { createSlice } from "@reduxjs/toolkit";

import { IReduxUser } from "@Interfaces";
import { userAPI } from "./user.query";

const reducerName = "user";
export const initialState: IReduxUser.IInitialState = {
  duplicateUsers: [],
};

export const userSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userAPI.endpoints.getUsers.matchFulfilled,
      (state, { payload }: any) => {
        state.duplicateUsers = payload;
      }
    );
  },
});

export const userSliceReducer = { [reducerName]: userSlice.reducer };
