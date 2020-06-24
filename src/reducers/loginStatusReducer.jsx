import {
    LOG_IN,
    LOG_OUT,
    SET_USER_DETAILS,
    RESET_CHECKING,
  } from "../actions/actions";
  
  const initialState = {
    status: false,
    userDetails: null,
    isVerified: false,
    checking: true,
  };
  
  const loginStatusReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOG_IN:
        return { ...state, status: true };
      case LOG_OUT:
        return { ...state, status: false };
      case SET_USER_DETAILS: {
        return { ...state, userDetails: action.payload };
      }
      case RESET_CHECKING:
        return { ...state, checking: false };
      default:
        return state;
    }
  };
  
  export default loginStatusReducer;
  