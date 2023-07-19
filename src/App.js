
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import { addCustomersAction } from './store/customerReducer';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector((state)=> state.cash.cash)
  const customers = useSelector((state)=> state.customers.customers) 

  const addCash = (cash)=>{
    dispatch({type: "ADD_CASH",payload:cash})
  }
  const getCash = (cash)=>{
    dispatch({type: "GET_CASH",payload:cash})
  }

  const addCustomers = ( name) =>{
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomersAction(customer))
  }
  return (
    <div className="App">
      {cash}
      <button onClick={()=>addCash(Number(prompt()))}> Add</button>
      <button onClick={()=>getCash(Number(prompt()))}> Get</button>
      <button onClick={()=>addCustomers(prompt())}> Add customers</button>
      {customers.map((customer)=>(
        <div>{customer.name}</div>
      ))}
    </div>
  );
}

export default App;
