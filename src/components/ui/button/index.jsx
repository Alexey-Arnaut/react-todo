import classNames from "classnames";

import "./button.scss";

const Button = ({ children, className, onClick }) => {
  return (
    <button className={classNames("button", className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
