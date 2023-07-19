
import './App.css';
import {useSelector,useDispatch} from "react-redux"

function App() {

  const dispatch = useDispatch()
  const cash = useSelector((state)=> state.cash)
  return (
    <div className="App">
    </div>
  );
}

export default App;
