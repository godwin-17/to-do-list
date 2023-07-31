import "./TodoItem.css";

interface Props {
  id: string;
  text: string;
  completed?: boolean;
  onCheckboxChange: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({
  id,
  text,
  completed,
  onCheckboxChange,
  onDelete,
}: Props) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    onCheckboxChange(id, checked);
  };

  const handleDeleteTodo = () => {
    onDelete(id);
  };

  return (
    <>
      <div className="todo-item">
        <div className="todo-icons">
          <img
            src="src\assets\Bin.svg"
            alt="Bin icon"
            className="bin-icon"
            onClick={handleDeleteTodo}
          />
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={completed || false}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className={`todo-text ${completed ? "completed-todo" : ""}`}>
          {text}
        </div>
      </div>
    </>
  );
};

export default TodoItem;
