/*const defaultState = {
  id: "",
  title: "",
  image: "",
  price: "",
  rating: "",
};

export default function productsReducer(state = defaultState, action) {
  switch (action.type) {
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
*/
