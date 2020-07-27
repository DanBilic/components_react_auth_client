import axios from "axios";
import { AUTH_USER } from "./types";

export const register = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/v1/auth/register", formValues);
  console.log("REGISTER RESPONSE", res);

  dispatch({ type: AUTH_USER, payload: res.data });
};
