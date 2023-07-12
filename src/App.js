
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

    const dispatch = useDispatch()
    const cash = useSelector((state)=>state.cash)
  return (
    <div className="App">
        {cash}
        <button onClick={()=> addCash(Number(prompt()))}>Add cash</button>
        <button onClick={()=> getCash(Number(prompt()))}>Get cash</button>
    </div>
  );
}

export default App;
