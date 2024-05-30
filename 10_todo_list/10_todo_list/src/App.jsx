import { useState, useEffect } from 'react'
import './App.css'
import { ToDoContextProvider } from './context'
import ToDoForm from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'

function App() {
  const [todoList, setToDoList] = useState([])
  // const [todoList, setToDoList] = useState(() => {
  //   const localData = localStorage.getItem('todoList');
  //   return localData ? JSON.parse(localData) : [];
  // });
  
  const addToDo = (todo) => {
    setToDoList((prev) => ([{ id:Date.now(), ...todo }, ...prev]))
  }
  const editToDo = (id, todo) => {
    setToDoList((prev) => prev.map((prevToDo) => {
      if(prevToDo.id===id) return todo
      else return prevToDo
    }))
  }
  const deleteToDo = (id) => {
    setToDoList((prev) => prev.filter((prevToDo) => prevToDo.id !== id));
  }
  const toggleToDo = (id) => {
    setToDoList((prev) => prev.map((prevToDo) => {
      if(prevToDo.id===id) return { ...prevToDo, completed : !prevToDo.completed }
      else return prevToDo
    }))
  }
  
  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
    console.log('Loaded from local storage:', storedTodoList);
    if (storedTodoList && storedTodoList.length>0 ) {
        setToDoList(storedTodoList);
    }
}, []);
  
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    console.log('Saving to local storage:', todoList);
  }, [todoList])

  return (
    <ToDoContextProvider value={{todoList, addToDo, editToDo, deleteToDo, toggleToDo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              <ToDoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
              {todoList.map((todo) => (
                <div 
                  key={todo.id}
                  className='w-full'
                >
                  <ToDoItem todo={todo} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  )
}

export default App
