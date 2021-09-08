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

    it("should return empty string when payload is empty", () => {
        expect(
            CounterReducer(undefined, {
                type: ActionConsts.Main.SetLoginDataReducer,
            })
        ).toEqual({
            token: "",
        });
    });

    it("should return the initial state by param", () => {
        expect(
            CounterReducer(
                {
                    token: "",
                },
                {} as IAction<IMain.Actions.IPayload>
            )
        ).toEqual({
            token: "",
        });
    });

    it("should handle Set Login Data", () => {
        expect(
            CounterReducer(undefined, {
                payload: {
                    token: "12345678910",
                },
                type: ActionConsts.Main.SetLoginDataReducer,
            })
        ).toEqual({
            token: "12345678910",
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
