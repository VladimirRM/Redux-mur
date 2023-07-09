
const initialState = {
   cash:0,
 }
 
 
  export const cashReducer = (state = initialState,action)=>{
     switch(action.type){
         case 'ADD_CASH':
           return{...state,cash:state.cash + action.payload}
         case 'GET_CASH':
           return{...state,cash:state.cash - action.payload}
       default:return state
     }
 }