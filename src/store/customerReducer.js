
const initialState = {
  customer:[],
}
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
 export const customersReducer = (state = initialState,action)=>{
  switch(action.type){
    case ADD_CUSTOMER:
      return {...state,cash:state.cash + action.payload}
    case REMOVE_CUSTOMER:
      return {...state,cash:state.cash  - action.payload}

    default: return state
  }
}
export const addCustomersAction = ( payload)=> ({type:ADD_CUSTOMER,payload})
export const removeCustomersAction = ( payload)=> ({type:REMOVE_CUSTOMER,payload})