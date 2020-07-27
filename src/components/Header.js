import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/logout">Logout</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to="/">Redux auth</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Link to="/">Redux auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
