import React, { Component } from "react";
import "../Header.css";
import axios from "axios";
import logo from "../Palumboutsy.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleLogoutClick() {
    console.log(this.props);
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {});
    this.props.handleLogout();
  }

  render() {
    return (
      <nav className="header">
        {/* logo on the left -> img */}
        <Link to="/">
          <img className="header__logo" src={logo} alt="Boutsy Logo" />
        </Link>
        {/*/ searchbox */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        {/* 3 links  */}
        <div className="header__nav">
          {/* 1st link*/}

          <Link to="/buy" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Login or</span>
              <span className="header__optionLineTwo">Sign up</span>
            </div>
          </Link>

          <Link
            to="/"
            onClick={this.handleLogoutClick}
            className="header__link"
          >
            <div className="header__option">
              <span className="header__optionLineOne">Click</span>
              <span className="header__optionLineTwo">Logout</span>
            </div>
          </Link>

          <Link to="/dashboard" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Dashboard</span>
            </div>
          </Link>
          {/*
        <Link to="/sell" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Sign up</span>
            <span className="header__optionLineTwo">Sell On Boutsy</span>
          </div>
        </Link>
      */}
        </div>

        <Link to="/products" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">View</span>
            <span className="header__optionLineTwo">Catalog</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* shopping icon*/}
            <ShoppingCartIcon />
            {/* num of objects */}
            <span className="header__optionLineTwo header_basketCount">0</span>
          </div>
        </Link>

        {/* basket icon with number */}
      </nav>
    );
  }
}
