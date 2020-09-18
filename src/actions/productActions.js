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
        return true;
      });
  };
};

/*
export const fetchProducts = () => {
  let data = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return (dispatch) => {
    dispatch({ type: "LOADING_REQUEST" });
    fetch(`${api_url}/products`, data)
      .then((res) => res.json())
      .then((products) =>
        dispatch({
          type: "FETCH_PRODUCTS",
          payload: products,
        })
      )
      .catch(() =>
        console.log("Response currently not accessible. Please retry later.")
      );
  };
};
*/
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
  let data = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return (dispatch) => {
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
