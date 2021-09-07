import { ActionConsts } from "@Definitions";
import { IAction, IMain } from "@Interfaces";

const INITIAL_STATE: IMain.IStateProps = {
    token: "",
};

type IPayload = IMain.Actions.IPayload;

export const CounterReducer = (
    state = INITIAL_STATE,
    action: IAction<IPayload>
) => {
    switch (action.type) {
        case ActionConsts.Main.SetLoginDataReducer:
            return {
                ...state,
                token: action?.payload?.token,
            };
        case ActionConsts.Main.ResetLoginDataReducer:
            return INITIAL_STATE;
        default:
            return state;
    }
};
