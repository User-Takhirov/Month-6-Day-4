import { createStore, combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import { CountReducer } from "./user/count-reducer";

const rootReducer = combineReducers({
  count: CountReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);
