import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
//import fetchReducer from "./fetchReducer";

const rootReducer = combineReducers({
  products: productsReducer
});

export default rootReducer;
