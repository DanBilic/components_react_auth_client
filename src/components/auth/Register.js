import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { Segment, Button, Form, Icon, Grid, Header } from "semantic-ui-react";

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
      <Segment>
        <Grid style={{ marginTop: "40px" }}>
          <Grid.Column width={5}></Grid.Column>
          <Grid.Column width={6}>
            <Header as="h2" icon textAlign="center">
              <Icon name="star" circular />
              <Header.Content>Register</Header.Content>
            </Header>
            <Form onSubmit={handleSubmit(this.onSubmit)} size="large">
              <Form.Field>
                <label>Name</label>
                <Field
                  name="name"
                  type="text"
                  component="input"
                  placeholder="Name..."
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Field
                  name="email"
                  type="text"
                  component="input"
                  placeholder="Email..."
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Field
                  name="password"
                  type="password"
                  component="input"
                  placeholder="Password..."
                />
              </Form.Field>
              <Form.Field>
                <label>Role</label>
                <Field
                  name="role"
                  type="text"
                  component="input"
                  placeholder="Role..."
                  style={{ marginBottom: "30px" }}
                />
              </Form.Field>
              <div>{this.props.errorMessage}</div>
              <Button
                fluid
                animated
                color="violet"
                style={{ marginBottom: "120px" }}
              >
                <Button.Content visible>Register</Button.Content>
                <Button.Content hidden>
                  <Icon name="check" />
                </Button.Content>
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Column width={5}></Grid.Column>
        </Grid>
      </Segment>
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
