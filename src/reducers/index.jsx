import { combineReducers } from "redux";
import loginStatusReducer from "./loginStatusReducer";
import userActionReducers from "./userActionReducers";


const rootReducer = combineReducers({
  loginStatus: loginStatusReducer,
  userAction: userActionReducers,
 
 
});

export default rootReducer;
