// #region Global Imports
import { Dispatch } from "redux";
import { ActionConsts } from "@Definitions";

export const CounterActions = {
    Increment: () => ({
        payload: null,
        type: ActionConsts.Counter.IncrementReducer,
    }),
};
