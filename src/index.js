import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';

const initialState = {
  cash:0,
}


const reducer = (state,action)=>{
      switch(action,type){
        case :{
           
        }


        default: return state
      }
}


const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


