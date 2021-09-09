declare namespace ICounter {
    export interface IProps {}

    export interface IInitialState {
        countNumber: number;
    }

    namespace Actions {
        export interface IMapPayload {}

        export interface IMapResponse {}

        export interface IPayload {
            params: {};
        }

        export interface IResponse {}
    }
}

export default ICounter;
