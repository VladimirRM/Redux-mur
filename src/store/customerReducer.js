const initialState = {
  customers:[],
}

const ADD_CUSTOMERS = 'ADD_CUSTOMERS'
const GET_CUSTOMERS = 'GET_CUSTOMERS'

 export const customerReducer  = (state = initialState,action)=>{
  switch (action.type) {
     case ADD_CUSTOMERS:
        return {...state,customers: [...state.customers,action.payload]}
     case REMOVE_CUSTOMERS:
        return {...state,customers: state.customers.filter((customer.id !==action.payload))}

        default: return state
  }
}

export const addCustomerAction = (payload)=>({type: ADD_CUSTOMERS,payload})
export const removeCustomerAction = (payload)=>({type: REMOVE_CUSTOMERS,payload})

