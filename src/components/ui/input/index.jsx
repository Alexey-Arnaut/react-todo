import "./input.scss";

const Input = ({ name, value, setValue, type }) => {
  return (
    <div className="field">
      <input
        className="form__field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=" "
        type={type}
      />
      <label className="form__label">{name}</label>
    </div>
  );
};

export default Input;
