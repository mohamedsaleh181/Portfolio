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
            <div  key={i} className="d-flex w-50 mx-auto justify-content-sm-between align-items-center border">
              <ul>
                <li className="list-unstyled">
                  <div className="d-flex flex-column pt-4 justify-content-lgcenter text">
                    <p className='text-dark text-start fw-bold fs-5'>Title : {todo.title}</p>
                    <p className='text-dark text-start fw-bold fs-5'>Content : {todo.content}</p>
                  </div>
                </li>
              </ul>
              <div className="btn-wrapper mx-5">
                <button className="btn btn-danger btn-lg" onClick={()=>deleteTodo(i)}>Remove</button>
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