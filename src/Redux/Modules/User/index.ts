import { userQueryReducer } from "./user.query";
import { userSliceReducer } from "./user.slice";

const combinedReducer = {
  ...userQueryReducer,
  ...userSliceReducer,
};

export * from "./user.query";
export * from "./user.slice";
export default combinedReducer;
