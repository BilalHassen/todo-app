import "../TodoContainer/TodoContainer.scss";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoContainer() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    // get the todos from local storage and convert the json formatted string
    // into a javascript object with JSON.parse()
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    // update the todos state with the todos from the local storage
    setTodo(storedTodos);
    console.log(todos);
  }, []);

  // function to add a new to do to the array of todos
  const addTodo = (todo) => {
    setTodo((prevTodos) => {
      const newTodo = [
        ...todos,
        { id: uuidv4(), task: todo, isEdited: false, completed: false },
      ];
      console.log(newTodo);
      const jsonTodo = JSON.stringify(newTodo);
      localStorage.setItem("todos", jsonTodo);
      return newTodo;
    });
  };

  const editTodo = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todos, isEdited: !todo.isEdited } : todo
      )
    );
  };

  return (
    <>
      <section className="todo-container">
        <h1 className="todo-container__header">Add something to get done !</h1>
        <TodoForm addTodo={addTodo} />
        {/*map over the todos array and add render the todo component with the data */}
        <div className="todo__wrapper">
          {todos.map((todo, index) =>
            todo.isEdited ? (
              <EditTodoForm />
            ) : (
              <Todo key={todo.id} task={todo} editTodo={editTodo} />
            )
          )}
        </div>
      </section>
    </>
  );
}

export default TodoContainer;
