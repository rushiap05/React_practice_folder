import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  useEffect(()=>{
    if(count > 10){
      setSecondCount(0);
    }
    else {
      setSecondCount(count*2);
    }
    

  },[count])

  return (
    <div className="App">
      <div>{count}</div>
      <div>{secondCount}</div>
      <br />
      <button onClick={() => {
          setCount(count+1);
      }}>Click</button>
    </div>
  )
}

export default App
