import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoList : [{
        id: 1,
        txt: "Hello World"
    }]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addToDo : (state, action) => {
            const todo = {
                id : nanoid(),
                txt : action.payload
            }
            state.todoList.push(todo)
        },
        removeToDo : (state, action) => {
            state.todoList = state.todoList.filter((todo)=>todo.id!==action.payload)
        }
    }
})

export const { addToDo, removeToDo } = todoSlice.actions

export default todoSlice.reducer