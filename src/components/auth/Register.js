import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { register } from "../../actions";

class Register extends Component {
  onSubmit = (formProps) => {
    console.log(formProps);
    this.props.register(formProps, this.props.history);
  };
  render() {
    //console.log("PRPS", this.props);
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Name</label>
          <Field name="name" type="text" component="input" />
          <label>Email</label>
          <Field name="email" type="text" component="input" />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <fieldset>
          <label>Role</label>
          <Field name="role" type="text" component="input" />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Register!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, { register }),
  reduxForm({ form: "register" }),
  withRouter
)(Register);
