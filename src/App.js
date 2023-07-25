
import './App.css';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state)=>state.cash)

  const addCash = (cash)=>{
    dispatch({type:'ADD_CASH',payload:cash})
  }
  return (
    <div className="App">
      {cash}
      <button onClick={()=>addCash(Number(prompt()))}>Add</button>
      <button onClick={()=>getCash(Number(prompt()))}>Get</button>
    </div>
  );
}

export default App;
