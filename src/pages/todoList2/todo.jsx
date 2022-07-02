// // import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import TodoForm from "../../components/todoItem/TodoForm";
// import TodoList from "../../components/todoItem/TodoList";
// import './Todo.css';
// // import {addTodoItem, deleteTodoItem} from '../../redux/store'
// import { addTodoItem, deleteTodoItem } from '../../reduxKit/features/todoSlice'
// function Todo2() {
//   // const [todos, setTodos] = useState([  ]);st
//   const todoList = useSelector(state => state);
//   const dispatch = useDispatch();
//   console.log("tososodfoasof",todoList)

//   const addTodo = (task) => {
//     // setTodos([...todos, task]);
//     // console.log(task)
//     // dispatch(addTodoItem(task));
//     dispatch(addTodoItem(task));
//   };
  
//   const deleteTodo = (index) => {
//     // setTodos(todos.filter((todo,i) => i !== index))
//     dispatch(deleteTodoItem(index));
//   }

//   return (
//     <div className="text-center py-2 todo-wrapper container">
//       <TodoForm addTodo={addTodo} />
//       <TodoList todos={todoList} deleteTodo={deleteTodo} />
//     </div>
//   );
// }

// export default Todo2;