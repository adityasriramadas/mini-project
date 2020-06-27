import { SET_ITEM } from "../actions/actions";

const initialState = {
  item1: true,
  
};

const userActionReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM:
      if (action.payload === "1") {
        return {
          ...state,
          item1: true,
          
          k: "1",
        };
      } 
    default:
      return state;
  }
};

export default userActionReducers;
