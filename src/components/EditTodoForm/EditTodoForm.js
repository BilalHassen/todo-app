import React, { useState } from "react";
import "./EditTodoForm.scss";
function EditTodoForm() {
  return (
    <>
      <form className="edit-todo">
        <input
          type="text"
          className="edit-todo__input"
          placeholder="edit todo"
        />
        <button className="edit-todo__button">edit task</button>
      </form>
    </>
  );
}

export default EditTodoForm;
