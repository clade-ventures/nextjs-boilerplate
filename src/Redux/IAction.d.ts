import { Action as ReduxAction } from "redux";

export interface IAction<T> extends ReduxAction {
    payload?: T;
}
