import TodoForm from "../../components/todoItem/TodoForm";
import TodoList from "../../components/todoItem/TodoList";
import './Todo.css';
function Todo() {

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;