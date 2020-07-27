import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor, faJedi } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "semantic-ui-react";

class Header extends Component {
  state = { activeItem: "/" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.history.push(`${name}`);
  };
  renderLinks(activeItem) {
    if (this.props.authenticated) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name="/logout"
            active={activeItem === "/logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position="right">
        <Menu.Item
          name="/register"
          active={activeItem === "/register"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="/login"
          active={activeItem === "/login"}
          onClick={this.handleItemClick}
        />
      </Menu.Menu>
    );
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Menu pointing>
        <Menu.Item
          name="/"
          active={activeItem === "/"}
          onClick={this.handleItemClick}
        >
          <FontAwesomeIcon icon={faMeteor} size="lg" />
        </Menu.Item>
        {this.renderLinks(activeItem)}
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default compose(connect(mapStateToProps), withRouter)(Header);
