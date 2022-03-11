// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { About } from './components/About'
import { Contact } from './components/Contact'
import {Error} from "./components/Error"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
        <Route exact path="/" element={<About/>} /> //only for "/" homepage that is about
        <Route path="/contact" element={<Contact/>} />
        <Route element={<Error/>} />
     </Routes>
    </div>
  )
}

export default App
