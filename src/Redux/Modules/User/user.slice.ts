import { createSlice } from "@reduxjs/toolkit";

import IReduxUser from "./user";
import { userAPI } from ".";
import { reducerName } from "./user.const";

export const initialState: IReduxUser.IInitialState = {
    latestCreatedUser: {},
};

export const userSlice = createSlice({
    name: reducerName,
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(
            userAPI.endpoints.createUser.matchFulfilled,
            (state, { payload }: any) => {
                state.latestCreatedUser = payload;
            }
        );
    },
});
