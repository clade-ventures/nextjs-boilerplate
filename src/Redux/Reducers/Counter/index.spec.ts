import { expect } from "@jest/globals";

import { CounterReducer } from "./";
import { IAction, ICounter } from "@Interfaces";
import { ActionConsts } from "@Definitions/ActionConsts";

describe("Counter Reducer", () => {
    it("should return the initial state", () => {
        expect(
            CounterReducer(
                undefined,
                {} as IAction<ICounter.Actions.IMapPayload>
            )
        ).toEqual({
            countNumber: 1,
        });
    });

    it("should handle Increment", () => {
        expect(
            CounterReducer(undefined, {
                type: ActionConsts.Counter.IncrementReducer,
            })
        ).toEqual({
            countNumber: 2,
        });
    });

    it("should handle Reset Increment", () => {
        expect(
            CounterReducer(undefined, {
                type: ActionConsts.Counter.ResetIncrementReducer,
            })
        ).toEqual({
            countNumber: 1,
        });
    });
});
