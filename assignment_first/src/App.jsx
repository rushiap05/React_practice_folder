import { useEffect, useState } from 'react'
import './App.css'

const style = {
  main_div: {
    width: "fit-content",
    margin: "100px auto",
    padding: "10px",
    border: "2px solid blue",
    background: "lightblue",
    borderRadius: "0.5rem"

  },

  single: {
    margin: "10px",
    borderRadius: "0.5rem"
  }

}


function App() {
  //   const [min, setMin] = useState(5);
  //   const [sec, setSec] = useState(59);

  //   // console.log(sec)
  //   const timerStop =  () => {return setInterval(() => {
  //   if(sec === 0){
  //     setSec(59);
  //     setMin(min-1);
  //   }
  //   else {
  //     setSec((second) => second-1)
  //     // console.log(sec)
  //   }
  // }, 1000)};


  //   useEffect(() => {
  //     timerStop()
  //   },[]
  //   )

  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(5);
  let [count, setCount] = useState(0)

  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMin(min - 1);
        setSeconds(59);
      }
    }, 1000)

    return () => clearInterval(timer);
  },[seconds,count])

  const restart = () => {
    setSeconds(0);
    setMin(5)
  }

  const stop = () => {
    clearInterval(timer)
  }

  


  return (
    <div className="App">
      {/* <div>{min}:{sec}</div>
     <button>start</button>
     <button>stop</button>
     <button>reset</button> */}
      <div style={style.main_div}>

        <h1>{min}:{seconds}</h1>

        <div style={style.main_button}>
          <button style={style.single} onClick={stop}>stop</button>
          <button style={style.single} onClick={restart}>restart</button>
          <button style={style.single} onClick={() => {
            setCount(count+1)
          }}>start</button>
        </div>

      </div>

    </div>
  )
}

export default App
