import { SET_ITEM } from "../actions/actions";

const initialState = {
  item1: true,
  item2: false,
  item4: false,
  item5: false,
  k: 1,
};

const userActionReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM:
      if (action.payload === "1") {
        return {
          ...state,
          item1: true,
          item2: false,
          item4: false,
          item5: false,
          k: "1",
        };
      } else if (action.payload === "2") {
        return {
          ...state,
          item1: false,
          item2: true,
          item4: false,
          item5: false,
          k: "2",
        };
      } else if (action.payload === "4") {
        return {
          ...state,
          item1: false,
          item2: false,
          item4: true,
          item5: false,
          k: "4",
        };
      } else if (action.payload === "5") {
        return {
          ...state,
          item1: false,
          item2: false,
          item4: false,
          item5: true,
          k: "5",
        };
      } else return state;
    default:
      return state;
  }
};

export default userActionReducers;
