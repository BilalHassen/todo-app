import "../TodoContainer/TodoContainer.scss";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { useState, useEffect } from "react";
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

  const editTodo = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEdited: !todo.isEdited } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, isEdited: !todo.isEdited }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
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
          {todos.map((todo) =>
            todo.isEdited ? (
              <EditTodoForm task={todo} editTask={editTask} />
            ) : (
              <Todo
                key={todo.id}
                task={todo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
              />
            )
          )}
        </div>
      </section>
    </>
  );
}

export default TodoContainer;
