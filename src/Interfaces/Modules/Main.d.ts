declare namespace IMain {
    export interface IStateProps {
        token: string;
    }

    namespace Actions {
        export interface IPayload {
            token: string;
        }

        export interface IResponse {}

        export interface ILoginPayload {
            email: string;
            password: string;
        }
    }
}

export { IMain };
