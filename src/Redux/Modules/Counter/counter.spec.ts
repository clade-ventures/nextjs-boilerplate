import { makeStore } from "@Redux";
import { counterSlice, initialState } from ".";
import ICounter from "./counter";

describe("Counter slice test", () => {
    it("Initial State", () => {
        expect(initialState).toEqual({
            countNumber: 0,
        } as ICounter.IInitialState);
    });

    it("Increment", () => {
        const store = makeStore({ isServer: false });
        let currentCountNumber = store.getState().counter.countNumber;
        const expectedCountNumber = currentCountNumber + 1;

        store.dispatch(counterSlice.actions.increment());
        currentCountNumber = store.getState().counter.countNumber;
        expect(currentCountNumber).toBe(expectedCountNumber);
    });

    it("Decrement and Reset", () => {
        const store = makeStore({ isServer: false });
        let currentCountNumber = store.getState().counter.countNumber;
        const expectedCountNumber = currentCountNumber - 1;

        store.dispatch(counterSlice.actions.decrement());
        currentCountNumber = store.getState().counter.countNumber;
        expect(currentCountNumber).toBe(expectedCountNumber);

        store.dispatch(counterSlice.actions.reset());
        currentCountNumber = store.getState().counter.countNumber;
        expect(currentCountNumber).toBe(0);
    });
});
