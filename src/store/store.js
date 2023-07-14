import { applyMiddleware, combineReducers, createStore } from "redux"
import { cashReducer } from "./cashReducer"
import { customersReducer } from "./customerReducer"
import thunk from "redux-thunk"

export const rootReducer = combineReducers({
   cash:cashReducer,
   customers:customersReducer,
})


export const store = createStore(rootReducer,applyMiddleware(thunk))