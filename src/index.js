import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const initialState = {
    cash:0,
}

export const reducer = (state,action)=>{
    switch (action.type){
case'ADD_CASH':
return {...state,cash: state.cash + action.payload}



        default: return state
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider>
<React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>



);



