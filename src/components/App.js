import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
//import { fetchUser } from "../actions/";

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
        <BrowserRouter>
          <div>HI</div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, null)(App);
