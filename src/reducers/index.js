import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import fetchReducer from "./fetchReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  products2: fetchReducer,
});

export default rootReducer;
