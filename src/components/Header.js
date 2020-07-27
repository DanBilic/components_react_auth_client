import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Redux auth</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
      </div>
    );
  }
}

export default Header;
