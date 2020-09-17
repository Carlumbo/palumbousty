/* import React, { Component } from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavigationBar extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul classame="navbar__guest">
        <li>Logout</li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar__guest">
        <li>
          <Link to="/signup" href="#" />
          Signup
        </li>
        <li>
          <Link to="/signup" href="#" />
          Login
        </li>
      </ul>
    );

    return <div>{isAuthenticated ? userLinks : guestLinks}</div>;
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
*/
