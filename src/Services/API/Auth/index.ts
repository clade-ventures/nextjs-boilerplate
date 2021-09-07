import { Http } from "@Services";
import { IAuthService } from "@Interfaces";

export const AuthService = {
    Login: async (
        payload: IAuthService.Login.IPayload
    ): Promise<IAuthService.Login.IResponse> => {
        let response: IAuthService.Login.IResponse;

        try {
            response = await Http.Request<IAuthService.Login.IResponse>(
                "POST",
                "/login",
                undefined,
                payload
            );
        } catch (error) {
            console.log("http error: ", error);
            response = {};
        }

        return response;
    },
};
