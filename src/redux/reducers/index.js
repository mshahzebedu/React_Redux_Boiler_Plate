import userReducer from "./UserReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  userReducer,
  // write all imported reducers here
});
export default allReducer;
