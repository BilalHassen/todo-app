import "../TodoContainer/TodoContainer.scss";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoContainer() {
  const [todos, setTodo] = useState([]);

  // function to add a new to do to the array of todos
  const addTodo = (todo) => {
    setTodo((prevTodos) => {
      const newTodo = [
        ...todos,
        { id: uuidv4(), task: todo, isEdited: false, completed: false },
      ];
      console.log(newTodo);
      return newTodo;
    });
  };

  return (
    <>
      <section className="todo-container">
        <h1 className="todo-container__header">Add something to get done !</h1>
        <TodoForm addTodo={addTodo} />
        <button onClick={() => addTodo("clean the house")}>
          Add Todo Manually
        </button>
      </section>
    </>
  );
}

export default TodoContainer;
