import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import React, { useState, useEffect } from "react";
import Counter from "./components/Counter.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
    console.log("onTodoDelete()");
  }

  function onCancel() {
    setShowModal(false);
    console.log("cancel delete");
  }

  function onConfirm() {
    setShowModal(false);
    console.log("delete todo item");
  }

  useEffect(() => {
    console.log("on mount");
  }, []);

  return (
    <div>
      <Title></Title>
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        ></input>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Frontend Simplified"
        ></Todo>
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Interview Section"
        ></Todo>
        <Todo onTodoDelete={onTodoDelete} title="Land $100k Job"></Todo>
      </div>
      {showModal ? (
        <Modal
          onCancel={onCancel}
          onConfirm={onConfirm}
          modal="Click Confirm. You will not be able to change your answer."
        ></Modal>
      ) : null}
    </div>
  );
}

export default App;
