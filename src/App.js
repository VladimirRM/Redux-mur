
import './App.css';
import './index.css'

import { useDispatch,useSelector } from 'react-redux';

function App() {

    const dispatch = useDispatch()

    const cash = useSelector((state)=>state.cash)
  return (
    <div  style={{display: 'flex'}}className="App">
              {cash}
           <button>Add CASH</button>
           <button>Get CASH</button>
   
    </div>
  );
}

export default App;
