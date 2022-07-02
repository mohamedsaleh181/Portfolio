import { useSelector, useDispatch } from 'react-redux';
import { deleteTodoItem } from '../../reduxKit/features/todoSlice'

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(arr => arr.todo.todoList)
    const deleteTodo = (index)=>{
      dispatch(deleteTodoItem(index));
    }

    const todosList =
      todos && todos.length > 0 ? (
        todos.map((todo, i) => {
          return (
            <div  key={i} className="d-flex align-items-center border my-3">
              <ul>
              <li className="border d-flex">
              <div className="text">
                <p>Title : {todo.title}</p>
                <p>Content : {todo.content}</p>
              </div>
              </li>
            </ul>
            <div className="btn-wrapper mx-5">
              <button className="btn btn-danger btn-sm" onClick={()=>deleteTodo(i)}>x</button>
            </div>
            </div>
          );
        })
      ) : (
        <p className="h5 mx-5 text-muted">no items on the list ..</p>
      );
  
    return (
      <div className="text-left">
        <h5 className="mx-5 text-muted">Todos List</h5>
        {todosList}
      </div>
    );
  };
  
  export default TodoList;