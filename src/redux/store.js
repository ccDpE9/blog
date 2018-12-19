import { createStore } from "redux";
import reducer from "./reducer";

export const store = createStore(reducer);

// lifecycle:
// 1. you call store.dispatch(action)
// 2. redux store calls provided reducer function
// 3. root reducer may combine the output of multiple reducers into a single state tree
// 4. listeners registered by store.subscribe(listener) are invoked. component.setState(newState) is called
