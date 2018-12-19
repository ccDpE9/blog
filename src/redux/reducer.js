import { combineReducers } from "redux";
import articles from "./reducers/article";
import auth from "./reducers/auth";
import { routerReducer } from 'react-router-redux';

const reducer = combineReducers({
  articles,
  auth,
  router: routerReducer
});

export default reducer;


// reducer specify how the app's state changes in response to actions send to the store

// is called reducer: because it's the type of function you would pass to Array.prototype.reduce(reducer, ? initialValue)
