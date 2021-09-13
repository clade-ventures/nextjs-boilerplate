declare namespace IReduxUser {
  export interface ICreateUserPayload {
    name: string;
    job: string;
  }

  export interface IInitialState {
    duplicateUsers: array;
  }

  export interface IUsersResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
  }

  export interface ICreateUserPayload {
    id: number;
    job: string;
  }
  export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
}

export { IReduxUser };
