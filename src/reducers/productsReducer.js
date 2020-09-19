const defaultState = {
  id: "",
  title: "",
  image: "",
  price: "",
  rating: "",
};

export default function productsReducer(state = defaultState, action) {
  switch (action.type) {
    case "LOADING_PRODUCTS":
      return { ...state, state: state.products };
    case "ADD_PRODUCTS":
      //console.log(defaultState)
      return { ...state, defaultState: action.products };
    case "CREATE_PRODUCT":
      return { ...state, product: action.payload };
    case "DELETE_PRODUCT":
      return {
        ...state,
        defaultState: state.defaultState.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
