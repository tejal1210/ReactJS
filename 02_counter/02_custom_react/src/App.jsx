import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const increment= ()=>{
    // interview question
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1 )
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
  }
  const decrement = () => {
    if(count>0){
      setCount(count-1)
    }
    else{
      alert("Count cannot be decremented")
    }
  }
  return (
    <>
      <h1>Tejal's Practice</h1>
      <h2>Count Value: {count}</h2>
      <button onClick={increment}>INCREMENT COUNT : {count}</button>
      <button onClick={decrement}>DECREMENT COUNT : {count}</button>
      <p>footer : {count} </p>


    </>
  )
}

export default App
