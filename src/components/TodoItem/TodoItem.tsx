import "./TodoItem.css";

const TodoItem = () => {
  return (
    <>
      <div className="todo-item">
        <div className="todo-icons">
          <img src="src\assets\Bin.svg" alt="Bin icon" className="bin-icon" />
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="todo-text">Lorem ipsum</div>
      </div>

      <div className="todo-item">
        <div className="todo-icons">
          <img src="src\assets\Bin.svg" alt="Bin icon" />
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="todo-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde animi
          nostrum voluptatem earum beatae excepturi qui veritatis vel laboriosam
          fugiat.
        </div>
      </div>

      <div className="todo-item">
        <div className="todo-icons">
          <img src="src\assets\Bin.svg" alt="Bin icon" />
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="todo-text">Lorem ipsum</div>
      </div>

      <div className="todo-item">
        <div className="todo-icons">
          <img src="src\assets\Bin.svg" alt="Bin icon" />
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="todo-text">Lorem ipsum</div>
      </div>
    </>
  );
};

export default TodoItem;
