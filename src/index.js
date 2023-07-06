import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const reducer  = (state,action)=>{
   switch (action.type) {
      case ADD_CASH:
         return {...state,cash: state.cash + action.payload}

         default: return state
   }
}

const store = createStore(reducer)

import { createStore } from 'redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



