import { Link } from "react-router-dom";

import Button from "../ui/button";

import "./form.scss";

const FormAuth = ({ link, linkName, btnName, onClick, children }) => {
  return (
    <form className="auth__form">
      {children}
      <div className="auth__form-footer">
        <Button
          className="auth__form-button"
          onClick={(e) => onClick(e.preventDefault())}
        >
          {btnName}
        </Button>
        <Link className="auth__form-link" to={link}>
          {linkName}
        </Link>
      </div>
    </form>
  );
};

export default FormAuth;