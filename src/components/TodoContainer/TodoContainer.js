import "../TodoContainer/TodoContainer.scss";
import TodoForm from "../TodoForm/TodoForm";
function TodoContainer() {
  return (
    <>
      <section className="todo-container">
        <h1 className="todo-container__header">
          Add something you'd like to get done!
        </h1>
        <TodoForm />
      </section>
    </>
  );
}

export default TodoContainer;
