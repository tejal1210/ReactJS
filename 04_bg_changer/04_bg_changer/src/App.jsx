import { useState } from 'react'

function App() {
  const [color, setColor] = useState("pink")

  return (
      <div 
      className="w-full h-screen duration-200" 
      style={{backgroundColor : color}}>
        <div 
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div 
        className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl bg-white">
            <button 
            onClick={() => setColor("magenta")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "magenta"}}>Magenta</button>
            <button 
            onClick={() => setColor("indigo")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "indigo"}}>Indigo</button>
            <button 
            onClick={() => setColor("#1ebbd7")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "#1ebbd7"}}>Turquoise</button>
          </div>
      </div>
    </div>
  )
}

export default App
