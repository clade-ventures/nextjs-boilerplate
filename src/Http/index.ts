import "isomorphic-unfetch";
import { fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";

export const getToken = (state: any) => {
  return state.auth?.token ?? null;
};

export const http = (isServer: any = undefined): BaseQueryFn<any> => {
  if (typeof isServer === "undefined") {
    isServer = typeof window === "undefined";
  }

  if (isServer) {
    return async ({ url, method, data }, { getState }) => {
      let headers = {};
      const token: any = getToken(getState());

      if (token) {
        headers = {
          Authorization: `Bearer ${token}`,
        };
      }

      try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
          method,
          headers,
          body: data,
        }).then(res => res.json());
        return { data: result.data, result: result };
      } catch (err: any) {
        return {
          error: {
            status: err?.response?.status,
            data: err?.response?.data,
          },
        };
      }
    };
  } else {
    return fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_API_URL,
      prepareHeaders: (headers, { getState }: any) => {
        const token: any = getToken(getState());

        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }

        return headers;
      },
    });
  }
};

export default http;
