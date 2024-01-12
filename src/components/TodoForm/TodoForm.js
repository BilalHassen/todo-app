import "./TodoForm.scss";

function TodoForm() {
  return (
    <>
      <form className="todo-form">
        <input
          type="text"
          className="todo-form__input"
          placeholder="enter todo"
        />
        <button className="todo-form__button">add task</button>
      </form>
    </>
  );
}

export default TodoForm;
