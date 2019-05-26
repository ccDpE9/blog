import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";
import thunk from "redux-thunk";

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk
    )
  )

  return store;
};

export default configureStore;
