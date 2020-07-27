import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const register = (formValues, history) => async (dispatch) => {
  console.log("HISTORY", history);
  try {
    const res = await axios.post("/api/v1/auth/register", formValues);
    console.log("REGISTER RESPONSE", res);

    dispatch({ type: AUTH_USER, payload: res.data.token });
    history.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.response.data.error });
  }
};
