import { ActionConsts } from "@Definitions";
import { IAction, IMain } from "@Interfaces";

const INITIAL_STATE: IMain.IStateProps = {
    token: "",
};

export const CounterReducer = (
    state = INITIAL_STATE,
    { type, payload }: IAction<IMain.Actions.IPayload>
) => {
    switch (type) {
        case ActionConsts.Main.SetLoginDataReducer:
            return {
                ...state,
                token: payload?.token ?? "",
            };
        case ActionConsts.Main.ResetLoginDataReducer:
            return INITIAL_STATE;
        default:
            return state;
    }
};
