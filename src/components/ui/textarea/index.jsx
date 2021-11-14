import classNames from "classnames";

import "./textarea.scss";

const Textarea = ({ className, name, value, setValue }) => {
  return (
    <div className="textarea-wrap">
      <textarea
        className={classNames("textarea", className)}
        rows="6"
        placeholder=" "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <label className="textarea__label">{name}</label>
    </div>
  );
};

export default Textarea;
