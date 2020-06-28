import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { chartsReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  chartsReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
