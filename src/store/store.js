import { combineReducers, createStore } from "redux";
import { customerReducer } from "./customerReducer";
import { cashReducer } from "./cashReducer";

export const rootReducer = combineReducers({
   cash: cashReducer,
   customers: customerReducer

})
export const store = createStore(rootReducer)