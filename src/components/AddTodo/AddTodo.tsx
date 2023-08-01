import "./AddTodo.css";

interface Props {
  onModalVisibility: () => void;
}

const AddTodo = ({ onModalVisibility }: Props) => {
  return (
    <>
      <button className="add-btn" onClick={onModalVisibility}>
        <svg
          className="add-icon"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M33 20L7 20"
            stroke="#01001e"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M20 33L20 7"
            stroke="#01001e"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        Nuova Voce
      </button>
    </>
  );
};

export default AddTodo;
