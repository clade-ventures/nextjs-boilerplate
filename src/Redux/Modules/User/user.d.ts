declare namespace IReduxUser {
    export interface ICreateUserPayload {
        name: string;
        job: string;
    }

    export interface IInitialState {
        latestCreatedUser: object;
    }
}

export default IReduxUser;
