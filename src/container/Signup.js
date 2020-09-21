import React, { Component } from "react";
import Registration from "../components/auth/Registration";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.history.push("/");
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Registration />

        <h3>Current Status: {this.props.loggedInStatus}</h3>
      </div>
    );
  }
}

export default Signup;
