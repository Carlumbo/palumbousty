import React from "react";
import "../Header.css";
import logo from "../Palumboutsy.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
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
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/buy" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Sign up</span>
            <span className="header__optionLineTwo">Buy Wholesale</span>
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

export default Header;
