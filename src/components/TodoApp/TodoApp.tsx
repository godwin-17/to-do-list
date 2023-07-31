import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import "./TodoApp.css";

const TodoApp = () => {
  return (
    <div className="todo-app">
      <Modal />
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default TodoApp;
