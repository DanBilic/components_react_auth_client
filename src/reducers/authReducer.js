import { AUTH_USER, AUTH_ERROR } from "../actions/types";

const INITIAL_STATE = {
  //autheticated contains the JWT token
  autheticated: "",
  errorMessage: "",
};

//export default function (state = null, action) {
export default function (state = INITIAL_STATE, action) {
  //console.log(action);

  switch (action.type) {
    case AUTH_USER:
      //return action.payload || false;
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
