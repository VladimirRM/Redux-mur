
import './App.css';
import {useSelector,useDispatch} from "react-redux"

function App() {

  const dispatch = useDispatch()
  const cash = useSelector((state)=> state.cash)
  const customers = useSelector((state)=> state.customers.customers) 

  const addCash = (cash)=>{
    dispatch({type: "ADD_CASH",payload:cash})
  }
  const getCash = (cash)=>{
    dispatch({type: "GET_CASH",payload:cash})
  }

  const addCustomers = ( name)
  return (
    <div className="App">
      {cash}
      <button onClick={()=>addCash(Number(prompt()))}> Add</button>
      <button onClick={()=>getCash(Number(prompt()))}> Get</button>
      <button onClick={()=>addCustomers(prompt())}> Add customers</button>
    </div>
  );
}

export default App;
