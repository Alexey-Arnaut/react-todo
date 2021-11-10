import classNames from "classnames";

import "./input.scss";

const Input = ({ name, className, value, setValue, onSubmit }) => {
  return (
    <form className={classNames("form", className)} onSubmit={onSubmit}>
      <input
        className="form__field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=" "
        type="text"
      />
      <label className="form__label">{name}</label>
    </form>
  );
};

export default Input;
