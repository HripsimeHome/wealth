import { combineReducers } from "redux";
import { userProfileReducer } from "./userProfileReducer";
import { counterReducer } from "./counterReducer";

export const rootReducer = combineReducers({
  userProfile: userProfileReducer,
  counter: counterReducer,
});
