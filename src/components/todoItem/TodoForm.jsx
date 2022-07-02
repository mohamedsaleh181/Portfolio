import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodoItem } from '../../reduxKit/features/todoSlice';


const TodoForm = () => {
  const dispatch = useDispatch();
  
  const addTodo = (data) =>{

    dispatch(addTodoItem(data))
  }
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log({ title, content })
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3 className="mb-4">Add a TODO</h3>

      <form onSubmit={handleSubmission}>
        <div className="d-flex justify-content-center my-5">
          <p className="text-dark fw-bold fs-4 mx-5">Title </p>
          <input
            className="w-50 form-control"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center my-2">
          <p className="text-dark fw-bold fs-4 mx-4">Content </p>
          <textarea
            className="w-50 form-control"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        

        <button className="my-4 btn btn-primary btn-sm px-4 w-25" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;