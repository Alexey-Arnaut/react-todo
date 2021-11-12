import React from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";
import { useHistory } from "react-router";

import FormAuthRegistr from "../../components/formAuth/formAuthRegistr";
import FormAuthMessage from "../../components/formAuth/formAuthMessage";

import "./registr.scss";

const Registr = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [message, setMessage] = React.useState("");

  const registr = async () => {
    if (email.trim().length > 0 && password.trim().length > 0) {
      if (password === repeatPassword) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
          .then(({ user }) => {
            dispatch(loginUser(user.uid));

            localStorage.setItem("user", JSON.stringify({ email, password }));
            push("/react-todo/");
          })
          .catch((err) => {
            setMessage(err.code);
          });
      } else {
        setMessage("wrong-repeat-password");
      }
    } else if (email.trim().length > 0) {
      setMessage("empty-field-email");
    } else if (password.trim().length > 0) {
      setMessage("empty-field-password");
    }
  };

  return (
    <div className="registr">
      <FormAuthMessage message={message} setMessage={setMessage} />
      <FormAuthRegistr
        title="Зарегистрироваться"
        btnName="Зарегистрироваться"
        link="/react-todo/login"
        linkName="Войти"
        setEmail={setEmail}
        setPassword={setPassword}
        setRepeatPassword={setRepeatPassword}
        onClick={registr}
      />
    </div>
  );
};

export default Registr;
