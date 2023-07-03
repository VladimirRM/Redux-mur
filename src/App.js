
import './App.css';
import {useSelector,useDispatch} from 'react-redux'


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
       dispatch({type: 'ADD_CUSTOMER',payload: customer})
  }

  const removeCustomer = (customer)=>{
    dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id})
  }





  return (
    <div  style={{ fontSize: '40px',justifyContent:'center' ,textAlign:'center'}}className={'app'}>
      <div style={{textAlign:'center',
        
    }}>{cash}</div>
      <button onClick={()=>addCash(Number(prompt()))}>ADD</button>
      <button onClick={()=>getCash(Number(prompt()))}>GET</button>
      <button onClick={()=>addCustomer((prompt()))}>Add Customer</button>
      {/* <button onClick={()=>deleteCustomer(Number(prompt()))}> Delete Customer</button> */}
       <div>
        {customers.length > 0 ? 
      <div>
        {customers.map(customer=>
          <div onClick={()=>removeCustomer(customer)}>{customer. name}</div>)}
      </div>:
      <div>Customers not found</div>  
      }
       </div>

    </div>
  );
}

export default App;
