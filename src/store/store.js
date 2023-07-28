import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import {customerReducer} from './customerReducer1'
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
   cash: cashReducer,
   customers: customerReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))