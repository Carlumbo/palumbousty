import React, { Component } from "react";
import "../Products.css";

//import { deleteProduct } from "../actions/productActions";

//const api_url = "http://localhost:3001/api/v1/products";

class Products extends Component {
  //debugger;

  productList = () => {
    return this.props.products.map((product) => (
      <div className="product">
        <div
          key={product.id}
          image={product.image}
          deleteProduct={this.props.deleteProduct}
          id={product.id}
          className="product__info"
        >
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
        <button onClick={() => this.props.deleteProduct(product.id)}>
          DELETE
        </button>
      </div>
    ));
  };

  handleDelete = () => {
    console.log(this);
    this.props.deleteProduct(this);
  };
  render() {
    //console.log(this.productList());
    //let products = this.props.products;
    //console.log(this.props.deleteProduct);
    return (
      <div>{this.productList()}</div>

      /*
      <div className="product__list">
        {products.map((product) => (
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
            <button className="add__button">Add to cart</button>
            <button
              onClick={this.deleteProduct(product.id)}
              className="delete__button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    */
    );
  }
}

export default Products;
