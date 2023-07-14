

import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { addCustomersAction, removeCustomersAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state)=>state.cash.cash)
  const customers = useSelector((state)=>state.customers.customers)

  const addCash = (cash)=>{
    dispatch({type:'ADD_CASH', payload:cash})
  }
  const getCash = (cash)=>{
    dispatch({type:'GET_CASH', payload:cash})
  }
  const addCustomers = (name)=>{
    const customer = {
        name,
        id:Date.now(),
    }
    dispatch(addCustomersAction(customer))
  }
  const removeCustomer = (customer)=>{
      dispatch(removeCustomersAction(customer.id))
  }
  return (
    <div className="App">
      {cash}
      <button onClick={()=>addCash(Number(prompt()))}>Add</button>
      <button onClick={()=>getCash(Number(prompt()))}>Get</button>
      <button onClick={()=>addCustomers(prompt())}>Add customers</button>
      <button onClick={()=>dispatch(fetchCustomers())}>Add customers form data</button>
      {customers.map(customer => (
        <div onClick={()=>removeCustomer(customer)}>{customer.name}</div>
      ))}

    </div>
  );
}

export default App;
