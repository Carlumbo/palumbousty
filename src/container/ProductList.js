import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    //  console.log(this.props.products);
    return <div>hello</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    loading: state.loading,
  };
};
const mapDisptachToProps = (dispatch) => {
  console.log(dispatch(fetchProducts()));
  return { fetchProducts: () => dispatch(fetchProducts()) };
};

export default connect(mapStateToProps, mapDisptachToProps)(ProductList);
