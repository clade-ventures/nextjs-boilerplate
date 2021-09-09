import { userAPI, userSlice } from ".";
import { reducerName, reducerPath } from "./user.const";

export * from "./user.query";
export * from "./user.slice";

const reducer = {
    [reducerName]: userAPI.reducer,
    [reducerPath]: userSlice.reducer,
};

export default reducer;
