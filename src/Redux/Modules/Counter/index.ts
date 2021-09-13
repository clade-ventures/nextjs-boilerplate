import { counterSliceReducer } from "./counter.slice";

const combinedReducer = {
  ...counterSliceReducer,
};

export * from "./counter.slice";
export default combinedReducer;
