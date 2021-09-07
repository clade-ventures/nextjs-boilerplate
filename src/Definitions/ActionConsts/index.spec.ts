import { expect } from "@jest/globals";

import { ActionConsts } from ".";

describe("Action constants", () => {
    describe("Home", () => {
        it("should have Counter_IncrementReducer", () => {
            expect(ActionConsts.Counter.IncrementReducer).toBe(
                "Counter_IncrementReducer"
            );
        });

        it("should have Counter_ResetIncrementReducer", () => {
            expect(ActionConsts.Counter.ResetIncrementReducer).toBe(
                "Counter_ResetIncrementReducer"
            );
        });
    });

    describe("Main", () => {
        it("should have Main_SetLoginData", () => {
            expect(ActionConsts.Main.SetLoginDataReducer).toBe(
                "Main_SetLoginDataReducer"
            );
        });

        it("should have Main_ResetLoginData", () => {
            expect(ActionConsts.Main.ResetLoginDataReducer).toBe(
                "Main_ResetLoginDataReducer"
            );
        });
    });
});
