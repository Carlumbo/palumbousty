import uuid from "uuid";
const defaultState = {
  id: "",
  title: "",
  image: "",
  price: "",
  rating: "",
};

export default function productsReducer(
  state = { defaultState, loading: true },
  action
) {
  switch (action.type) {
    case "LOADING_PRODUCTS":
      return { ...state, state: state.products, loading: true };
    case "ADD_PRODUCTS":
      //console.log(defaultState)
      return { ...state, defaultState: action.products, loading: false };
    case "CREATE_PRODUCT":
      return { defaultState: action.payload };
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
