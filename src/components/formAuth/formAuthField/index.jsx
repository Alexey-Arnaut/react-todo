import Input from "../../ui/input";

import "./form-auth-field.scss";

const FormAuthField = ({ name, type, setValue }) => {
  return (
    <div className="auth__form-field">
      <Input name={name} type={type} setValue={setValue} />
    </div>
  );
};

export default FormAuthField;
