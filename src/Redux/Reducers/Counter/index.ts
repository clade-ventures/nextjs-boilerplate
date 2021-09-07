// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, ICounter } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: ICounter.IStateProps = {
    countNumber: 1,
};

type IMapPayload = ICounter.Actions.IMapPayload;

export const CounterReducer = (
    state = INITIAL_STATE,
    action: IAction<IMapPayload>
) => {
    switch (action.type) {
        case ActionConsts.Counter.IncrementReducer:
            return {
                ...state,
                countNumber: state.countNumber + 1,
            };

        default:
            return state;
    }
};
