
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { addCustomerAction } from './store/customerReducer';

function App() {
    const dispatch = useDispatch()
    const cash = useSelector((state)=> state.cash.cash)
    const customers = useSelector((state)=> state.customers.customers)

    const addCash = (cash)=> {
       dispatch({type:"ADD_CASH", payload:cash})
    }
    const getCash = (cash)=> {
       dispatch({type:"GET_CASH", payload:cash})
    }

    const addCustomers =( name)=>{
        const customer = {
           name,
           id:Date.now()
        }
        dispatch(addCustomerAction(customer))
    }
  return (
    <div className="App">
        {cash}
        <button onClick={()=>addCash(Number(prompt()))}>Add</button>
        <button onClick={()=>getCash(Number(prompt()))}>Get</button>
        <button onClick={()=>addCustomers(prompt())}>Add customers</button>
        <div>
            {}
        </div>
    </div>
  );
}

export default App;
