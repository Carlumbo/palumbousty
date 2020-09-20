import React, { Component } from "react";
//import axios from "axios";
import { createProduct } from "../actions/productActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ProductCreation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image: "",
      price: "",
      rating: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log("formation");
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createProduct(this.state);
    //console.log("Cp 2");
    this.setState({
      title: "",
      image: "",
      price: "",
      rating: "",
    });
  }

  render() {
    return (
      <div>
        <label>Create Product</label>
        <form className="product__form" onSubmit={this.handleSubmit}>
          <label>Product Name:</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={this.state.rating}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image Address"
            value={this.state.image}
            onChange={this.handleChange}
            required
          />
          <button className="submit__button" type="submit">
            Create Product
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      createProduct,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(ProductCreation);
