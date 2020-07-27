import { AUTH_USER } from "../actions/types";

const INITIAL_STATE = {
  autheticated: "",
  errorMessage: "",
};

export default function (state = null, action) {
  //console.log(action);

  switch (action.type) {
    case AUTH_USER:
      return action.payload || false;

    default:
      return state;
  }
}
