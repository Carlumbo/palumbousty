const fetchReducer = (state = [], action) => {
  switch (action.type) {
    case "LOADING_PRODUCTS":
      //  console.log("load hello");
      return { ...state, state: state.products };
    case "ADD_PRODUCTS":
      //debugger;
      return { ...state, state: action.products };
    default:
      return state;
  }
};

export default fetchReducer;
