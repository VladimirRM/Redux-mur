
import './App.css';
import './index.css'

import { useDispatch,useSelector } from 'react-redux';





function App() {



    const dispatch = useDispatch()

    const cash = useSelector((state)=>state.cash)

    const addCash = (cash) =>{
        dispatch({type:'ADD_CASH',payload:cash})
    }
    
    const getCash = (cash) =>{
        dispatch({type:'GET_CASH',payload:cash})
    
    }
  return (
    <div  style={{ textAlign:'center' ,marginTop: '200px'}}className="App">
              {cash}
           <button onClick={()=>dispatch(addCash(Number(prompt()))) }>Add CASH</button>
           <button onClick={()=>getCash()}>Get CASH</button>
   
    </div>
  );
}

export default App;
