declare namespace IAuthService {
    namespace Login {
        export interface IPayload {
            email: string;
            password: string;
        }

        export interface IResponse {
            token?: string;
        }
    }
}

export { IAuthService };
