import "./input.scss";

const Input = ({ name, value, setValue, type }) => {
  return (
    <div className="input-wrap">
      <input
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=" "
        type={type}
      />
      <label className="input__label">{name}</label>
    </div>
  );
};

export default Input;
