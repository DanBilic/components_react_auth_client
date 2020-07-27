import axios from "axios";
import { toast } from "react-toastify";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const register = (formValues, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/auth/register", formValues);
    console.log("REGISTER RESPONSE", res);

    dispatch({ type: AUTH_USER, payload: res.data.token });

    //persisting login state on page reload-> save token to localStorage
    localStorage.setItem("token", res.data.token);
    history.push("/");
    toast.success("Successful Register 👌", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.response.data.error });
  }
};

export const login = (formValues, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/auth/login", formValues);
    console.log("REGISTER RESPONSE", res);

    dispatch({ type: AUTH_USER, payload: res.data.token });

    //persisting login state on page reload-> save token to localStorage
    localStorage.setItem("token", res.data.token);
    history.push("/");
    toast.success("Successful Login 👌", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.response.data.error });
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  toast.success("Successful Logout 👌", {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return {
    type: AUTH_USER,
    payload: "",
  };
};
