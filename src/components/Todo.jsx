import "./Todo.css";

function Todo({ title, onTodoDelete }) {
  function deleteTodo(id) {
    console.log('deleteTodo()', title.toUpperCase())
  }

  return (
    <div className="todo">
      <h2>{title}</h2>
      <button onClick={onTodoDelete}>Delete</button>
    </div>
  );
}

export default Todo;
