import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Apple } from './components/Apple'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <div className='all_data'>
     <Routes>
        <Route exact path='/' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Apple' element={<Apple/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
