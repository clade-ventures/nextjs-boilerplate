import { counterSlice } from ".";
import { reducerName } from "./counter.const";

export * from "./counter.slice";

const reducer = {
    [reducerName]: counterSlice.reducer,
};

export default reducer;
