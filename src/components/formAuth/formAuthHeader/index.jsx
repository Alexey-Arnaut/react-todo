import HeaderLogo from "../../header/headerLogo";

import "./form-auth-header.scss";

const FormAuthHeader = ({ title }) => {
  return (
    <div className="auth__form-header">
      <HeaderLogo />
      <h1 className="auth__form-title">{title}</h1>
    </div>
  );
};

export default FormAuthHeader;
