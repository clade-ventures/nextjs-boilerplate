import { makeStore } from "@Redux";

import { counterSlice, initialState } from ".";

import { IReduxCounter } from "@Interfaces";

describe("Counter slice test", () => {
  it("Should return a correct initial state", () => {
    expect(initialState).toEqual({
      countNumber: 0,
    } as IReduxCounter.IInitialState);
  });

  it("Should increment a count number", () => {
    const store = makeStore({ isServer: true });
    let currentCountNumber = store.getState().counter.countNumber;
    const expectedCountNumber = currentCountNumber + 1;

    store.dispatch(counterSlice.actions.increment());
    currentCountNumber = store.getState().counter.countNumber;
    expect(currentCountNumber).toBe(expectedCountNumber);
  });

  it("Should decrement and reset a count number ", () => {
    const store = makeStore({ isServer: true });
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
