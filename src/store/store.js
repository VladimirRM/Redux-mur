import { applyMiddleware, createStore } from 'redux'
import {cashReducer} from './cashReducer'
import {customerReducer}   from './customerReducer'

import { combineReducers } from 'redux'


export const rootReducer = combineReducers({
   cash: cashReducer,
   customers: customerReducer,
})



 export const store = createStore(rootReducer,applyMiddleware())
