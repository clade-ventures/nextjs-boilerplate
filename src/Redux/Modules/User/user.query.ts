import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { reducerPath } from "./user.const";

export const userAPI = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        prepareHeaders: (headers, { getState }: any) => {
            const token: any = getState()?.auth?.token;

            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => `users`,
            transformResponse: (response: any) => response?.data,
        }),
        getUserByID: builder.query({
            query: id => `users/${id}`,
        }),
        createUser: builder.mutation({
            query: body => ({
                url: `users`,
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useGetUsersQuery, useGetUserByIDQuery } = userAPI;
