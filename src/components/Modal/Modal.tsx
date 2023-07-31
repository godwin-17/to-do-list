import { useState } from "react";
import "./Modal.css";

interface Props {
  onModalVisibility: (visibility: boolean) => void;
  onSaveText: (text: string) => void;
  onSaveTodo: () => void;
}

const Modal = ({ onModalVisibility, onSaveText, onSaveTodo }: Props) => {
  const [textareaValue, setTextareaValue] = useState<string>("");

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setTextareaValue(event.target.value);
    onSaveText(event.target.value);
  };

  const handleSaveButtonClick = (): void => {
    if (textareaValue.trim() === "") {
      return;
    }
    onSaveTodo();
    onModalVisibility(false);
  };

  return (
    <>
      <div className="overlay" onClick={() => onModalVisibility(false)}></div>
      <div className="modal">
        <div className="modal-subcontainer">
          <div className="modal-content">
            <textarea
              className="modal-text"
              placeholder="Inserisci voce"
              value={textareaValue}
              onChange={handleTextareaChange}></textarea>
          </div>
          <button className="save-btn" onClick={handleSaveButtonClick}>
            Salva
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
