import "./AddTodo.css";

interface Props {
  onModalVisibility: () => void;
}

const AddTodo = ({ onModalVisibility }: Props) => {
  return (
    <>
      <button className="add-btn" onClick={onModalVisibility}>
        <img src="src\assets\Adds.svg" alt="Add Button" className="add-icon" />
        Nuova Voce
      </button>
    </>
  );
};

export default AddTodo;
