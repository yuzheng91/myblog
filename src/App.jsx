import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"

import Home from "./components/Home.jsx"
import Entrance from "./components/Entrance.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/" element={<Entrance/>}></Route>
    </Routes>
  )
}

export default App
