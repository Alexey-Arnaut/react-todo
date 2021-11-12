import HeaderLogo from "../../header/headerLogo";

import "./modal.scss";

const Modal = ({ children, active, setActive }) => {
  return (
    <div className={`modal ${active ? "modal--active" : ""}`}>
      <div className="modal-content">
        <button
          className="modal__close"
          onClick={() => setActive(false)}
        ></button>
        <HeaderLogo />
        {children}
      </div>
    </div>
  );
};

export default Modal;
