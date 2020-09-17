import React, { Component } from "react";
//import ProductForm from './ProductForm'\
import "../Products.css";
const api_url = "http://localhost:3001/api/v1/products";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    //get the products from the api
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch(api_url)
      .then((response) => response.json())
      .then((response_products) => {
        this.setState({
          products: response_products,
        });
      });
  }
  render() {
    return (
      <div className="product__list">
        {this.state.products.map((product) => (
          <div className="product">
            <div className="product__info">
              <p>{product.title}</p>
              <p>
                <small>SKU:{product.id}</small>
              </p>
              <div className="product__rating">
                {Array(product.rating)
                  .fill()
                  .map((_) => (
                    <p>
                      <span role="img" aria-label="Star rating">
                        ⭐
                      </span>
                    </p>
                  ))}
              </div>
            </div>
            <img src={product.image} alt="" />
            <p className="product__price">
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;

/* import React from 'react';
import '../Products.css';
//import ProductList from './products/ProductsList';





function Products({id, title ,image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p><small>{id}</small></p>
            <div className="product__rating">
                { Array(rating).fill().map((_) => (
                      <p><span role="img" aria-label="Star rating">⭐</span></p>
                   ))
                }
            </div>
            </div>
            <img src={image} alt="" /> 
            <p className="product__price">
                <small>$</small>
            <strong>{price}</strong>
                </p>
            <button>Add to cart</button>
        </div>
    )
}

export default Products
*/
