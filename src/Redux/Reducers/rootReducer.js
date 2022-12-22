import { combineReducers } from "redux";
import SignInReducer from "./SignInReducer";

const appReducer = combineReducers({
  SignInReducer
});

const RootReducer = (state, action) => {
  return appReducer(state, action);
}

export default RootReducer;
