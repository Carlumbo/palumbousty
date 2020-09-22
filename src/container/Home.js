import React from "react";
import backimage from "../boutsyBack.jpg";
import "../Home.css";
//import ProductList from "./ProductList";
//import Header from "../components/Header";
//import uuid from 'uuid'
function Home(props) {
  //console.log(props.user.user.email);

  if (props.user.loggedInStatus === "LOGGED_IN") {
    return (
      <div className="home">
        <img className="home__image" src={backimage} alt="Boutsy-back" />
        <div className="home__row"></div>
        <h2>Hello, {props.user.user.email} </h2>
        <p>Feel Free to Browse the Catalog or Add New Products</p>
      </div>
    );
  } else {
    return (
      <div className="home">
        <img className="home__image" src={backimage} alt="Boutsy-back" />
        <div className="home__row"></div>
        <h2>Hello, Guest </h2>
        <p>Please login or create an account</p>
      </div>
    );
  }
}

export default Home;
