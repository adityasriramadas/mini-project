import { LOG_IN, LOG_OUT, SET_USER_DETAILS, RESET_CHECKING } from "./actions";

export const login = () => {
  return {
    type: LOG_IN,
  };
};

export const logout = () => {
  return {
    type: LOG_OUT,
  };
};

export const setUserDetails = (data) => {
  return {
    type: SET_USER_DETAILS,
    payload: data,
  };
};

export const resetChecking = () => {
  return {
    type: RESET_CHECKING,
  };
};
