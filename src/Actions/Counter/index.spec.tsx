import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { expect } from "@jest/globals";

import { CounterActions } from ".";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Counter action tests", () => {
    test("Increment test actions", async () => {
        const store = mockStore({});
        const expectedActions = [
            {
                payload: null,
                type: "Counter_IncrementReducer",
            },
        ];

        store.dispatch(CounterActions.Increment());
        expect(store.getActions()).toEqual(expectedActions);
    });
});
