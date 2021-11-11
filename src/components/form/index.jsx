import { Link } from "react-router-dom";

import HeaderLogo from "../header/headerLogo";
import Input from "../ui/input";
import Button from "../ui/button";

import "./form.scss";

const Form = ({
  title,
  link,
  linkName,
  btnName,
  onClick,
  setEmail,
  setPassword,
}) => {
  return (
    <div className="auth__form">
      <HeaderLogo />
      <h1 className="auth__form-title">{title}</h1>
      <Input
        className="auth__form-field"
        name="Введите email"
        setValue={setEmail}
      />
      <Input
        className="auth__form-field"
        name="Введите пароль"
        setValue={setPassword}
      />
      <Button className="auth__form-button" onClick={onClick}>
        {btnName}
      </Button>
      <Link className="auth__form-link" to={link}>
        {linkName}
      </Link>
    </div>
  );
};

export default Form;
