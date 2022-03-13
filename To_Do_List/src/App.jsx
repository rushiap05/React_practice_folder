import { useState } from 'react'
import './App.css'
import {TodoItem} from "./components/TodoItem"

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

  const deleteItem = (id) => {
    console.log("delete")

    setInsertItem(oldItem => {
      return oldItem.filter((arrEle,index)=> {
        return index != id;
      })
    })
}


  return (
    <div className='main_div'>
        <div className='center_div'>
          <h1>To-Do List</h1>

          <input onChange={takeInput} type="text" value={inputItem} placeholder='Add a Items'/>

          <button onClick={putData}> + </button>

          <div className='insert_div'>
            {insertItem.map((items,index)=> {
              return <TodoItem id={index} key={index} deleteIt={deleteItem} liData={items}/>
            })}
          </div>
        </div>
    </div>
  )
}

export default App
