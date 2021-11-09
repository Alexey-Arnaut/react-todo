import classNames from "classnames";

import "./input.scss";

const Input = ({ name, className, value, setValue }) => {
  return (
    <form className={classNames("form", className)}>
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
