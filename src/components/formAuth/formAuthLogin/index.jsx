import { Link } from "react-router-dom";

import FormAuth from "../";
import FormAuthField from "../formAuthField";
import FormAuthHeader from "../formAuthHeader";

const FormAuthLogin = ({
  title,
  btnName,
  link,
  linkName,
  setEmail,
  setPassword,
  onClick,
}) => {
  return (
    <FormAuth
      btnName={btnName}
      link={link}
      linkName={linkName}
      onClick={onClick}
    >
      <FormAuthHeader title={title} />
      <FormAuthField name="Введите email" type="email" setValue={setEmail} />
      <FormAuthField
        name="Введите пароль"
        type="password"
        setValue={setPassword}
      />
      <Link className="auth__form-link" to="/react-todo/reset-password">
        Забыли пароль?
      </Link>
    </FormAuth>
  );
};

export default FormAuthLogin;
