import { SET_USER } from "../types";

const initialState = {
  name: "Janna",
  email: "",
};

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
