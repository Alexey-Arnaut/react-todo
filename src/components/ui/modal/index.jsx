import "./modal.scss";

const Modal = ({ children, active, setActive }) => {
  return (
    <div className={`modal ${active ? "modal--active" : ""}`}>
      <div className="modal-content">
        <button
          className="modal__close"
          onClick={() => setActive(false)}
        ></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
