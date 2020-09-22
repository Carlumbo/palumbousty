import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, deleteProduct } from "../actions/productActions";
import ProductCreation from "../components/ProductCreation";
import Products from "../components/Products";
import "../Products.css";

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleLoading = () => {
    //console.log(this.props.products);
    if (this.props.loggedInStatus === "NOT_LOGGED_IN") {
      return (
        <div>
          <h1>You must login to view catalog</h1>
        </div>
      );
    } else if (this.props.products.loading) {
      // console.log(this.props.products.loading);
      // console.log("hmm");
      return <div>Loading...</div>;
    } else {
      // console.log("okay now what");
      return (
        <div>
          <ProductCreation />
          <br />
          <div className="product__row">
            <Products
              products={this.props.products.defaultState}
              deleteProduct={this.props.deleteProduct}
            />
          </div>
        </div>
      );
    }
  };
  render() {
    return <div className="App">{this.handleLoading()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    loading: state.loading,
  };
};
const mapDisptachToProps = (dispatch) => {
  //console.log(dispatch(fetchProducts()));

  return {
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(ProductList);
