import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  return (
    <div className="todo-list-container">
      <div className="todo-list-content">
        <h1 className="title">TODO</h1>
        <div className="todos-container">
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
