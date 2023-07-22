
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { addCustomersAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state)=>state.cash.cash)
  const customers = useSelector((state)=>state.customers.customers)

  const addCash = ( cash)=>{
    dispatch({type: 'ADD_CASH',payload: cash})
  }
  const getCash = ( cash)=>{
    dispatch({type: 'GET_CASH',payload: cash})
  }

  const addCustomers = ( name)=>{
    const customer = {
      name,
      id:Date.now()
    }
    dispatch( addCustomersAction(customer))
  }
  return (
    <div className="App">
      {cash}
      <button onClick={()=>addCash(Number(prompt()))}>Add cash</button>
      <button onClick={()=>getCash(Number(prompt()))}>Get cash</button>
      <button onClick={()=>addCustomers(prompt())}>Add customers</button>
      {customers.map(customer=>(
        <div key={customer.id}>{customer.name}</div>
      ))}
    </div>
  );
}

export default App;
