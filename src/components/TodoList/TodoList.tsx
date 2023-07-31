import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

interface TodoItem {
  id: string;
  text: string;
  completed?: boolean;
}

interface Props {
  todos: TodoItem[];
  onCheckboxChange: (id: string, completed: boolean) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList = ({ todos, onCheckboxChange, onDeleteTodo }: Props) => {
  return (
    <div className="todo-list-container">
      <div className="todo-list-content">
        <h1 className="title">TODO</h1>
        <div className="todos-container">
          {todos.map((todo) => (
            <TodoItem
              {...todo}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              onCheckboxChange={onCheckboxChange}
              onDelete={onDeleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
