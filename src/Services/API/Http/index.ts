import "isomorphic-unfetch";

import { HttpModel } from "@Interfaces";

const BaseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;
export const Http = {
    Request: async <A>(
        methodType: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
        url: string,
        params?: HttpModel.IRequestQueryPayload,
        payload?: HttpModel.IRequestPayload
    ): Promise<A> => {
        return new Promise((resolve, reject) => {
            const token = "";
            const query = params
                ? `?${JSON.stringify({
                      ...params,
                  })}`
                : "";

            fetch(`${BaseUrl}${url}${query}`, {
                body: JSON.stringify(payload),
                cache: "no-cache",
                headers: {
                    "content-type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                method: `${methodType}`,
            })
                .then(async response => {
                    if (response.status === 200) {
                        return response.json().then(resolve);
                    }
                    return reject(response);
                })
                .catch(e => {
                    reject(e);
                });
        });
    },
};
