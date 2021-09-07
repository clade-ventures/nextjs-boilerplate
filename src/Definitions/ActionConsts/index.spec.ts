import { ActionConsts } from ".";

describe("Action constants", () => {
    describe("Home", () => {
        it("should have Counter_IncrementReducer", () => {
            expect(ActionConsts.Counter.IncrementReducer).toBe(
                "Counter_IncrementReducer"
            );
        });
    });
});
