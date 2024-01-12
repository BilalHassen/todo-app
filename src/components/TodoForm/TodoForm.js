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
      </form>
    </>
  );
}

export default TodoForm;
