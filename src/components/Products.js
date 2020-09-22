import React, { Component } from "react";
import "../Products.css";

class Products extends Component {
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
            <small>SKU:{product.id}</small>{" "}
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
          </p>
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
    this.props.deleteProduct(this);
  };
  render() {
    console.log(this);
    return <div className="product__row">{this.productList()}</div>;
  }
}

export default Products;
