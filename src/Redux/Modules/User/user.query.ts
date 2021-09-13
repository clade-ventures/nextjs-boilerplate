import { createApi } from "@reduxjs/toolkit/query/react";

import { IReduxUser } from "./user";
import http from "@src/Http";

const reducerPath = "userApi";
export const userAPI = createApi({
  reducerPath,
  baseQuery: http(),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      transformResponse: (
        response: IReduxUser.IUsersResponse
      ): IReduxUser.IUsersResponse => response,
    }),
    getUserByID: builder.query({
      query: (id: { id: number }) => `users/${id}`,
    }),
    createUser: builder.mutation({
      query: (body: IReduxUser.ICreateUserPayload) => ({
        url: `/users`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIDQuery } = userAPI;
export const userQueryReducer = { [reducerPath]: userAPI.reducer };
