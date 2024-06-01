import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo'
import ToDo from './components/ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>To Do List Using Redux Toolkit</h1>
      <AddToDo/>
      <br />
      <ToDo/>
    </>
  )
}

export default App
