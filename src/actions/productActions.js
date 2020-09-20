//import axios from "axios";
const api_url = "http://localhost:3001/api/v1";

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_PRODUCTS" });
    fetch("http://localhost:3001/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        // console.log(dispatch);

        dispatch({ type: "ADD_PRODUCTS", products: responseJSON });
      });
  };
};

export const createProduct = (products) => {
  let data = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(products),
  };

  return (dispatch) => {
    fetch(`${api_url}/products`, data)
      .then((res) => res.json())
      .then((productData) =>
        dispatch({
          type: "CREATE_PRODUCT",
          payload: productData,
        })
      )
      .catch((error) => error);
  };
};

export const deleteProduct = (id) => {
  // debugger;
  let data = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return (dispatch) => {
    //console.log("cp1");
    fetch(`${api_url}/products/${id}`, data)
      .then((res) => res.json())
      .then((product) =>
        dispatch({
          type: "DELETE_PRODUCT",
          payload: product,
        })
      )
      .catch((error) => error);
  };
};
