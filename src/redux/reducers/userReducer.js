import { SET_USER } from "../types";

const initialState = {
  name: "",
  email: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
