import { SET_ITEM } from "./actions";

export const setItem = (key) => {
  return {
    type: SET_ITEM,
    payload: key,
  };
};
