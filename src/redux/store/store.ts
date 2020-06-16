import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getInitialState, rootReducer } from "./reducers";

export const getStore = () => createStore(
    rootReducer,
    getInitialState(),
    composeWithDevTools(applyMiddleware(thunk))
);
