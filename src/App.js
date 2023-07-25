
import './App.css';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state)=>state.cash)
  return (
    <div className="App">
    </div>
  );
}

export default App;
