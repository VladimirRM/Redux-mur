import { combineReducers, createStore } from 'redux';
import {customersReducer} from './customerReducer'


export const rootReducer = combineReducers({
   cash: cashReducer,
   customers: customersReducer,
})





export const store = createStore(rootReducer)