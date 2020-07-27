import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { login } from "../../actions";

class Login extends Component {
  onSubmit = (formProps) => {
    console.log(formProps);
    this.props.login(formProps, this.props.history);
  };
  render() {
    //console.log("PRPS", this.props);
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>login!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, { login }),
  reduxForm({ form: "login" }),
  withRouter
)(Login);
