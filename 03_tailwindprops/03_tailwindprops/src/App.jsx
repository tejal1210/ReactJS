import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const someArr=[1,2,3]
  const someObj={
    keyValue: 2
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline mb-1">
      Hello world!
      </h1>
      <h2 className="bg-green-400 text-black p-1 rounded mb-1">Tailwind Test</h2>
      <Card username="Tejal" message="Hi, I am Tejal"/>
      <Card str="string" myArr={someArr} myObj={someObj}/>
    </>
  )
}

export default App
