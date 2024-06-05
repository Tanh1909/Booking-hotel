import { combineReducers } from "redux";

import loginReducer from "./login";
import { search } from "./search";

const rootReducers = combineReducers({
  search,
  loginReducer,
});

export default rootReducers;
