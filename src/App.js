
import './App.css';
import { useDispatch,useSelector } from 'react-redux';

function App() {

    const dispatch = useDispatch()
    const cash = useSelector((state)=> state.cash)

    const addCash = (cash)=>{
        dispatch({type: "ADD_CASH",payload:cash})
    }
    const getCash = (cash)=>{
        dispatch({type: "GET_CASH",payload:cash})
    }
  return (
    <div className="App">
        {cash}
        <button onClick={()=>addCash(Number(prompt()))}>ADD</button>
        <button onClick={()=>getCash(Number(prompt()))}>GET</button>
    </div>
  );
}

export default App;
