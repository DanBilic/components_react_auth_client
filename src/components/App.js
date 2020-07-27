import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
//import { fetchUser } from "../actions/";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Header from "./Header";
import Register from "./auth/Register";
import Logout from "./auth/Logout";
import Login from "./auth/Login";

class App extends React.Component {
  /*
  componentDidMount() {
    console.log(this.props);
    this.props.fetchUser();
  }
  */
  render() {
    return (
      <div className="ui container">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <BrowserRouter>
          <Header />
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/logout" exact>
            <Logout />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, null)(App);
