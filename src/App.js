
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



  return (
    <div  style={{ fontSize: '40px',justifyContent:'center' ,textAlign:'center'}}className={'app'}>
      <div style={{textAlign:'center',
        
    }}>{cash}</div>
      <button onClick={()=>addCash(Number(prompt()))}>ADD</button>
      <button onClick={()=>getCash(Number(prompt()))}>GET</button>
      <button onClick={()=>addCustomer(Number(prompt()))}>Add Customer</button>
      <button onClick={()=>deleteCustomer(Number(prompt()))}> Delete Customer</button>
         {customers.length > 0 ?
          <div>
         {customers.map((customer)=>(
          <div>{customer.name}</div>
         ))}

          </div>:
          <div>
            Not customers
          </div> 
        }

    </div>
  );
}

export default App;
