import "./Modal.css";

const Modal = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-subcontainer">
          <div className="modal-content">
            <textarea
              className="modal-text"
              placeholder="Inserisci voce"></textarea>
          </div>
          <button className="save-btn">Salva</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
