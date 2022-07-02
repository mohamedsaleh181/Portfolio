import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todoList: [
    ],
  };


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodoItem: (state,action)=>{
            state.todoList.push(action.payload)
        },
        deleteTodoItem: (state,action)=>{
           state.todoList.splice(action.payload,1)
        }
}})
export const { addTodoItem, deleteTodoItem } = todoSlice.actions

export default todoSlice.reducer