const initialState = {
    customers:[],
}

 export  const customerReducer = (state=initialState, action)=>{
    switch (action.type){
        case "ADD_CUSTOMER":{
          return{...state, customers:[...state.customers,action.payload]}
        }
        case "REMOVE_CUSTOMERS":{
          return{...state, customer:state.customers.filter((customer)=> customer.id !==action.payload)}
        }
        default: return state
    }
}