const initialState = {
   customers: [],
}

const ADD_CUSTOMERS = 'ADD_CUSTOMERS'
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS'

export const customerReducer = (state = initialState,action)=>{
  switch (action.type){
case'ADD_CUSTOMERS':
return {...state,customers: [...state.customers, action.payload]}
case'REMOVE_CASH':
return {...state,customers: [...state.customers.filter(customers=>customers.id !== action.payload)]}



      default: return state
  }
}
export const addCustomersAction = (payload)=>({ type: ADD_CUSTOMERS,payload})
export const removeCustomersAction = (payload)=>({ type: REMOVE_CUSTOMERS,payload})