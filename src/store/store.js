import { combineReducers, createStore } from 'redux';
import {customersReducer} from './customerReducer'


export const rootReducer = combineReducers({
   cash: cashREducers,
   customers: customersReducer,
})





export const store = createStore(rootReducer)