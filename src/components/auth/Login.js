import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import {
  Segment,
  Button,
  Form,
  Icon,
  Grid,
  Header,
  Message,
} from "semantic-ui-react";

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
      <Segment>
        <Grid style={{ marginTop: "40px" }}>
          <Grid.Column width={5}></Grid.Column>
          <Grid.Column width={6}>
            <Header as="h3" icon textAlign="center">
              <Icon name="unlock" />
              <Header.Content>Login</Header.Content>
            </Header>
            <Form error onSubmit={handleSubmit(this.onSubmit)} size="large">
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
              {this.props.errorMessage ? (
                <Message
                  error
                  header="Input Error"
                  content={this.props.errorMessage}
                />
              ) : (
                <div></div>
              )}
              <Button
                fluid
                animated
                color="purple"
                style={{ marginBottom: "120px" }}
              >
                <Button.Content visible>Login</Button.Content>
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
  connect(mapStateToProps, { login }),
  reduxForm({ form: "login" }),
  withRouter
)(Login);
