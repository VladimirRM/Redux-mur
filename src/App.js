
import './App.css';
import { useDispatch,useSelector } from 'react-redux';

function App() {

    const dispatch = useDispatch()
    const cash = useSelector((state)=>state.cash)
  return (
    <div className="App">
        {cash}
        <button onClick={()=>addCash(Number(prompt()))}></button>
        <button onClick={()=>getCash(Number(prompt()))}></button>

    </div>
  );
}

export default App;
