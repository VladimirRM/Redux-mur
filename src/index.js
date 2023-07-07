import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
   cash:0,
}


const reducer = (state = initialState,action)=>{
   switch (action.type){
      case  "ADD_CASH":
         return {...state,cash: state.cash + action.payload}
      case  "GET_CASH":
         return {...state,cash: state.cash - action.payload}

         default: return state
   }
}


const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />

    </Provider>

);



