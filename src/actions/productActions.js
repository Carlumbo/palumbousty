export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_PRODUCTS" });
    fetch("http:://localhost:3001/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "ADD_PRODUCTS", Products: responseJSON });
      });
  };
};
