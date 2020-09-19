import React from "react";
import backimage from "../boutsyBack.jpg";
import "../Home.css";
//import ProductList from "./ProductList";
import Header from "../components/Header";
//import uuid from 'uuid'
//import LavOil from './products/images/Lavender.jpg'
//import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={backimage} alt="Boutsy-back" />

      {/* Product, id, title, price, rating, image*/}
      <div className="home__row">
        <Header />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;