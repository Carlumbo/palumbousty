import React, { Component } from "react";
import axios from "axios";

export default class ProductCreation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image: "",
      price: "",
      rating: "",
      creationErrors: "",
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
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const { title, price, rating, image } = this.state;
    axios
      .post(
        "http://localhost:3001/api/v1/products",
        {
          product: {
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("reg  res", response);
      })
      .catch((error) => {
        console.log("reg error", error);
      });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <label>Create Product</label>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Create Product</button>
        </form>
      </div>
    );
  }
}
