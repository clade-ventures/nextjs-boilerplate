import { makeStore } from "@Redux";
import { initialState, userAPI } from ".";

import { IReduxUser } from "@Interfaces";

describe("User slice test", () => {
  it("Should return a correct initial state", () => {
    expect(initialState).toEqual({
      duplicateUsers: [],
    } as IReduxUser.IInitialState);
  });
});

describe("User query test", () => {
  it("Should duplicate the data to user reducer", async () => {
    const store = makeStore({ isServer: true });

    await store.dispatch(userAPI.endpoints.getUsers.initiate({}, {}));

    expect(store.getState()?.user?.duplicateUsers?.length).toBeGreaterThan(0);
  });
});
