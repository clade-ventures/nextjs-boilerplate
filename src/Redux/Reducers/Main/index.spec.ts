import { expect } from "@jest/globals";

import { CounterReducer } from ".";
import { IAction, IMain } from "@Interfaces";
import { ActionConsts } from "@Definitions/ActionConsts";

describe("Main Reducer", () => {
    it("should return the initial state", () => {
        expect(
            CounterReducer(undefined, {} as IAction<IMain.Actions.IPayload>)
        ).toEqual({
            token: "",
        });
    });

    it("should handle Reset Login Data", () => {
        expect(
            CounterReducer(undefined, {
                type: ActionConsts.Main.ResetLoginDataReducer,
            })
        ).toEqual({
            token: "",
        });
    });
});
