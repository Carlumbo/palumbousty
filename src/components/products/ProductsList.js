import React, { Component } from "react";
//import ProductForm from './ProductForm'

const api_url = "http://localhost:3001/api/v1/products";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    //get the products from the api
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
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
      <div>
        <ul id="product_list">
          {this.state.products.map((product) => (
            <div className="product">
              <div className="product__info">
                <p>{product.title}</p>
                <p>
                  <small>{product.id}</small>
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
        </ul>
      </div>
    );
  }
}

export default ProductList;
