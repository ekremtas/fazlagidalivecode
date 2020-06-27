import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { chartsReducer } from "./reducers";

const reducers = combineReducers({
  chartsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;