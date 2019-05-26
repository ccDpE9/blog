import { combineReducers } from "redux";
import * as articleReducers from "./articles";
import filters as filterReducer from "./filters"; 

const rootReducer = combineReducers(
  articleReducers,
  filterReducer,
);

export default rootReducer;
