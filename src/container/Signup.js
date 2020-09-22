import React, { Component } from "react";
import Registration from "../components/auth/Registration";
import Login from "../components/auth/Login";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/home");
    alert("Login Succesful");
  }
  render() {
    console.log(this);
    return (
      <div>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />

        <h3>Current Status: {this.props.loggedInStatus}</h3>
      </div>
    );
  }
}

export default Signup;
