import {createStore} from 'redux'

// Action
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodoItem = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const deleteTodoItem = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

// IntialState
const initialState = {
    todoList: [
    ],
  };
// reducer

const todoReducer = (state=initialState,action)=>{
    switch (action.type){
        case "ADD_TODO":
            return {...state , todoList: [...state.todoList , action.payload]}
            // return {...state , counter: state.couneter+1}
            // return 




        case "DELETE_TODO":
            return {...state , todoList: [...state.todoList.filter((item,i) => {
                console.log(item)
               return i !== action.payload
                
            })]}
        default:
            return state;
    };
}

export default createStore(todoReducer);

