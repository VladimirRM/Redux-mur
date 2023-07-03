
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';


function App() {

  const dispatch = useDispatch()

  const cash = useSelector((state)=> state.cash.cash)
  const customers = useSelector((state)=> state.customers.customers)

  const addCash = (cash)=>{
       dispatch({type:"ADD_CASH", payload: cash})
  }

  const getCash = ( cash)=>{
    dispatch({type:"GET_CASH",payload: cash})
  }

  const addCustomer =  (name)=>{
    const customer ={
      name,
      id: Date.now(),
    }
       dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer)=>{
    dispatch(removeCustomerAction(customer.id))
  }





  return (
    <div  style={{ fontSize: '40px',justifyContent:'center' ,textAlign:'center'}}className={'app'}>
      <div style={{textAlign:'center',
        
    }}>{cash}</div>
      <button onClick={()=>addCash(Number(prompt()))}>ADD</button>
      <button onClick={()=>getCash(Number(prompt()))}>GET</button>
      <button onClick={()=>addCustomer((prompt()))}>Add Customer</button>
      <button > Delete Customer</button>
      <button onClick={()=>dispatch(fetchCustomers())}>Get customers from Data</button>


       <div>
        {customers.length > 0 ? 
      <div>
        {customers.map(customer=>
          <div onClick={()=>removeCustomer(customer)} style={{border: '1px solid black', padding:'10px 20px'}} >{customer.name}</div>)}
      </div>:
      <div>Customers not found</div>  
      }
       </div>

    </div>
  );
}

export default App;
