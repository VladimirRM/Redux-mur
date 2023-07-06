import { applyMiddleware, combineReducers, createStore } from "redux";
import {customerReducer} from './customerReducer'
import {cashReducer}  from './cashReducer'
import thunk from "redux-thunk";


export const rootReducer = combineReducers({
   cash: cashReducer,
   customers: customerReducer,
})


export const store =createStore(rootReducer,applyMiddleware(thunk))