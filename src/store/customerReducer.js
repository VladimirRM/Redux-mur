
const initialState = {
  customers:[],
}
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const ADD_MANY_CUSTOMER = 'ADD_MANY_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
 export const customersReducer = (state = initialState,action)=>{
  switch(action.type){
    case ADD_CUSTOMER:
      return {...state,customers: [...state.customers,action.payload]}
    case ADD_MANY_CUSTOMER:
      return {...state,customers: [...state.customers,...action.payload]}
    case REMOVE_CUSTOMER:
      return {...state,cash:state.cash  - action.payload}

    default: return state
  }
}
export const addCustomersAction = ( payload)=> ({type:ADD_CUSTOMER,payload})
export const addManyCustomersAction = ( payload)=> ({type:ADD_MANY_CUSTOMER,payload})
export const removeCustomersAction = ( payload)=> ({type:REMOVE_CUSTOMER,payload})