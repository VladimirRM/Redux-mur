
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state)=>state.cash.cash)
  const customers = useSelector((state)=>state.customers.customers)

  const addCash = (cash)=>{
    dispatch({type:'ADD_CASH',payload:cash})
  }
  const getCash = (cash)=>{
    dispatch({type:'GET_CASH',payload:cash})
  }
  const addCustomer = (name)=>{
    const customer = {
      name,
      id:Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomers = (customer)=>{
    dispatch(removeCustomerAction(customer.id))
  }
  return (
    <div className="App">
      {cash}
      <button onClick={()=>addCash(Number(prompt()))}>Add</button>
      <button onClick={()=>getCash(Number(prompt()))}>Get</button>
      <button onClick={()=>addCustomer(prompt())}>Add customers</button>
      {customers.map((customer)=>(
        <div 
        onClick={()=>removeCustomers(customer)}
        >{customer.name}</div>
      ))}
    </div>
  );
}

export default App;
