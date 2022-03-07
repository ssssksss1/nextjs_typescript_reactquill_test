import * as actions from "./actions";
const initialState = {
  auth1: "user",
};
export const authReducer = (
  state = initialState,
  action: actions.ACTION_INSTANCE
) => {
  switch (action.type) {
    case "auth/TYPE_NAME":
      return { ...state, auth1: action.payload };
    default:
      return state;
  }
};
