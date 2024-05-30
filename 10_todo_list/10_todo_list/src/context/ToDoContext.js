import { createContext, useContext } from 'react'

export const ToDoContext = createContext({
    todoList : [{
        id : 1,
        txt : "To-Do",
        completed : false
    }],
    addToDo : (todo) => {},
    editToDo : (id, todo) => {},
    deleteToDo : (id) => {},
    toggleToDo : (id) => {} 
})

export const ToDoContextProvider = ToDoContext.Provider

export function useToDoContext () {
    return useContext(ToDoContext)
}
