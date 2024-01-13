import React, { useState, useEffect } from "react";
import "./EditTodoForm.scss";
function EditTodoForm({ task, editTask }) {
  const [values, setValues] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedValue = values.trim();

    if (trimmedValue === "") {
      alert("please edit the task");
    } else {
      editTask(values, task.id);
    }
  };

  return (
    <>
      <form className="edit-todo" onSubmit={handleSubmit}>
        <input
          type="text"
          className="edit-todo__input"
          placeholder="edit todo"
          value={values}
          onChange={(e) => setValues(e.currentTarget.value)}
        />
        <button className="edit-todo__button">edit task</button>
      </form>
    </>
  );
}

export default EditTodoForm;
