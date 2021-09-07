import thunk from "redux-thunk";
import { expect } from "@jest/globals";
import configureMockStore from "redux-mock-store";

import { MainActions } from ".";
import { ActionConsts } from "@Definitions/ActionConsts";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Main action tests", () => {
    test("Login test", async () => {
        const store = mockStore({});

        const expectedActions = [
            {
                payload: {
                    token: "12345678910",
                },
                type: ActionConsts.Main.SetLoginDataReducer,
            },
        ];

        await store.dispatch<any>(
            MainActions.Login({
                email: "eve.holt@reqres.in",
                password: "cityslicka",
            })
        );

        expect(store.getActions()).toEqual(expectedActions);
    });
});
