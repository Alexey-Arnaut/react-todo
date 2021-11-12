import React from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";
import { useHistory } from "react-router";

import FormAuthLogin from "../../components/formAuth/formAuthLogin";
import FormAuthMessage from "../../components/formAuth/formAuthMessage";

import "./login.scss";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [message, setMessage] = React.useState("");

  const login = async () => {
    if (email.trim().length > 0 && password.trim().length > 0) {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(loginUser(user.uid));

          localStorage.setItem("user", JSON.stringify({ email, password }));
          push("/react-todo/");
        })
        .catch((err) => {
          setMessage(err.code);
          console.log(err.code);
        });
    } else if (email.trim().length > 0) {
      setMessage("empty-field-email");
    } else if (password.trim().length > 0) {
      setMessage("empty-field-password");
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));

      setEmail(user.email);
      setPassword(user.password);

      if (email && password) {
        login();
      }
    }
  }, [email, password]);

  return (
    <div className="login">
      <FormAuthMessage message={message} setMessage={setMessage} />
      <FormAuthLogin
        title="Войти в аккаунт"
        btnName="Войти"
        link="/react-todo/registr"
        linkName="Зарегестрироваться"
        setEmail={setEmail}
        setPassword={setPassword}
        onClick={login}
      />
    </div>
  );
};

export default Login;
