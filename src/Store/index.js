import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// Hiding redux dev tool for production
const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// const Store = createStore(RootReducer, applyMiddleware(thunk));

export default Store;
