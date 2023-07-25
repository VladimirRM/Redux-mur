import { combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import {customerReducer} from './customerReducer'


export const rootReducer = combineReducers({
   cash: cashReducer,
   customers: customerReducer
})

export const store  = createStore(rootReducer)