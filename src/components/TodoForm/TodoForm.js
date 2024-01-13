import "./TodoForm.scss";
import React, { useState } from "react";

function TodoForm({ addTodo }) {
  // get the value of the input to get the task for the todo
  const [values, setValues] = useState("");

  const handleSubmit = (e) => {
    // prevent the default page reload
    e.preventDefault();
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-form__input"
          placeholder="enter todo"
          // makes the input a controlled component to always reflect the current
          //value of the state keeping it updated.
          value={values}
          onChange={(e) => setValues(e.currentTarget.value)}
        />
        <button className="todo-form__button">add task</button>
      </form>
    </>
  );
}

export default TodoForm;
