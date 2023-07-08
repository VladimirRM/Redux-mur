const initialState = {
   cash: 0,
}
const reducer = (state = initialState,action)=>{
       switch (action.type){
             case"ADD_CASH":
             return {...state,cash: state.cash + action.payload}
             case"GET_CASH":
             return {...state,cash: state.cash - action.payload}
           default: 
           return state
       }
} 