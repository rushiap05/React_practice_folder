import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [inputItem, setInputItem] = useState("");

  const [insertItem, setInsertItem] = useState([])

  const takeInput = (event) => {
    setInputItem(event.target.value)
    // console.log(inputItem);
  }

  const putData = () => {
    setInsertItem(() => {
      return [...insertItem, inputItem]
    })
    setInputItem("")
  }

  return (
    <div className='main_div'>
        <div className='center_div'>
          <h1>To-Do List</h1>

          <input onChange={takeInput} type="text" value={inputItem} placeholder='Add a Items'/>

          <button onClick={putData}> + </button>

          <ol>
            {insertItem.map((items)=> {
              return <li>{items}</li>
            })}
          </ol>
        </div>
    </div>
  )
}

export default App
