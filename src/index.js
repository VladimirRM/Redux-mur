import React from 'react'

import { createStore } from 'redux'


const defaultState = {
  cash: 0,
}

const reducer = (state = defaultState,action)=>{
  switch(action,type){
        case "ADD_CASH":
        
        
        case "GET_CASH":
    default: return state
  }
}

const store = createStore()



const index = () => {
  return (
    <div>
      
    </div>
  )
}

export default index
