import { Dispatch } from "redux";

import { ActionConsts } from "@Definitions";
import { IMain } from "@Interfaces";
import { AuthService } from "@Services";

export const MainActions = {
    Login:
        (payload: IMain.Actions.ILoginPayload) =>
        async (dispatch: Dispatch) => {
            const result = await AuthService.Login(payload);

            dispatch({
                payload: {
                    token: result.token,
                },
                type: ActionConsts.Main.SetLoginDataReducer,
            });
        },
};
