import { useEffect, useState } from "react";
import styles from "./Todo.module.scss";
import Button from "../../components/Button";
import "../../assets/styles/main.scss";
let uninId = 0;
function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(() => {
    const todoList = JSON.parse(localStorage.getItem("todo"));
    return todoList ? todoList : [];
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: ++uninId, text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const total = todos.length;
  const done = todos.filter((todo) => todo.completed).length;
  const remain = total - done;
  return (
    <div className={styles.todo}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.titleHeader}>Todo App</h1>
        <div className={styles.main}>
          <input
            value={inputValue} // cập nhập input khi reset
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập task mới..."
          />
          <Button className={styles.btn} type="submit" primary rounded>
            Add
          </Button>
        </div>
        {todos.length === 0 ? (
          <div className={styles.empty}>
            Chưa có task nào 😪. hãy thêm task mới nào !
          </div>
        ) : (
          <ul className={styles.listTodo}>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={todo.completed ? styles.completed : ""}
              >
                <label className={styles.labelWrapper}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo.id)}
                  />
                  <span>{todo.text}</span>
                </label>
                <Button
                  className={styles.btnDeletedTodo}
                  onClick={() => handleDeleteTodo(todo.id)}
                  rounded
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        )}
        {todos.length === 0 ? (
          ""
        ) : (
          <div className={styles.stats}>
            <span>
              Tổng: {total} task(s)🤨, Hoàn thành : {done} 🤑 task(s), Còn lại:
              {remain} 😗 task(s)
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
export default Todo;
