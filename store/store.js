import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as Reducers from "./reducers";

const rootReducer = combineReducers({
  places: Reducers.PlacesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
