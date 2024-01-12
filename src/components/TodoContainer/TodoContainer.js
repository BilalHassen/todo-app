import "../TodoContainer/TodoContainer.scss";
import TodoForm from "../TodoForm/TodoForm";
import React, { useState } from "react";
import Todo from "../Todo/Todo";
function TodoContainer() {
  return (
    <>
      <section className="todo-container">
        <h1 className="todo-container__header">Add something to get done !</h1>
        <TodoForm />
        <Todo />
      </section>
    </>
  );
}

export default TodoContainer;
