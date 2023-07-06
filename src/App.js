
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { addCustomersAction, removeCustomersAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';



function App() {
    const dispatch = useDispatch()

    const cash = useSelector((state)=> state.cash.cash)
    const customers = useSelector((state)=> state.customers.customers)


const addCash = (cash) =>{
    dispatch({type: 'ADD_CASH',payload: cash})
}
const getCash = (cash) =>{
    dispatch({type: 'GET_CASH',payload: cash})
}
const addCustomers = (name) => {
    const customer = {
        name,
        id:Date.now()
    }
        dispatch(addCustomersAction(customer))
}
const removeCustomers = (customer)=>{
    dispatch(removeCustomersAction(customer))
}
  return (
    <div className="App">
        {cash}
        <button onClick={()=>addCash(Number(prompt()))}>Add</button>
        <button onClick={()=>getCash(Number(prompt()))}>Get</button>
        <button onClick={()=>addCustomers(prompt())}>Add customers</button>
        <button onClick={()=>dispatch(fetchCustomers())}>Get</button>
        <div>
            {customers.length > 0 ? 
           <div>
            {customers.map(customer=>
             <div onClick={()=>removeCustomers(customer.id)}>{customer.name}</div>
             )}
           </div>   :
            <div>Customers not found</div>
        }
        </div>
    </div>
  );
}

export default App;
