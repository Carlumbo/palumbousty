import React, { Component } from "react";
//import "../Header.css";
import UserHeader from "../components/UserHeader";
import GuestHeader from "../components/GuestHeader";
//import axios from "axios";
//import logo from "../Palumboutsy.png";
//import { Link } from "react-router-dom";
//import SearchIcon from "@material-ui/icons/Search";
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default class Header extends Component {
  render() {
    if (
      this.props.user.loggedInStatus === "LOGGED_IN" ||
      this.props.loggedInStatus === "LOGGED_IN"
    ) {
      return <UserHeader handleLogout={this.props.handleLogout} />;
    } else {
      return <GuestHeader handleLogout={this.props.handleLogout} />;
    }
  }
}
