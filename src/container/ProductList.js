import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import ProductCreation from "../components/ProductCreation";
import Products from "../components/Products";

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  handleLoading = () => {
    //console.log(this.props.loading);
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ProductCreation />
          <Products
            products={this.props.products.defaultState}
            //deleteProduct={this.props.deleteProduct}
          />
        </div>
      );
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Products</h1>
        {this.handleLoading()}
      </div>
    );
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
    deleteProduct: (id) => dispatch({ type: "DELETE_pRODUCT", id }),
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(ProductList);
