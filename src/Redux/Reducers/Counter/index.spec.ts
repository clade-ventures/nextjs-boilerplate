import { IAction, ICounter } from "@Interfaces";
import { CounterReducer } from "./";

describe("home reducer", () => {
    it("should return the initial state", () => {
        expect(
            CounterReducer(undefined, {} as IAction<ICounter.Actions.IMapPayload>)
        ).toEqual({
            countNumber: 1
        });
    });
});
