import "../TodoContainer/TodoContainer.scss";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoContainer() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodo(fetchTodos);
  }, []);

  // function to add a new to do to the array of todos
  const addTodo = (todo) => {
    setTodo((prevTodos) => {
      const newTodo = [
        ...prevTodos,
        { id: uuidv4(), task: todo, isEdited: false, completed: false },
      ];
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    });
  };

  // function to render edit to do form
  const editTodo = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEdited: !todo.isEdited } : todo
      )
    );
  };

  // function to edit each task within a todo
  const editTask = (task, id) => {
    setTodo((prevTodos) => {
      const editedTodo = prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, isEdited: !todo.isEdited }
          : todo
      );

      localStorage.setItem("todos", JSON.stringify(editedTodo));
      return editedTodo;
    });
  };

  // function to delete todo
  const deleteTodo = (id) => {
    const deletedTodo = todos.filter((todo) => todo.id !== id);
    setTodo(deletedTodo);
    // update the local storage witht the filtered todos
    localStorage.setItem("todos", JSON.stringify(deletedTodo));
  };

  // function to mark a todo as complete
  const completeTodo = (id) => {
    const completeTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodo(completeTodo);
    localStorage.setItem("todos", JSON.stringify(completeTodo));
  };

  return (
    <>
      <section className="todo-container">
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
