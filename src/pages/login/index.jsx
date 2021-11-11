import React from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";
import { useHistory } from "react-router";

import Form from "../../components/form";

import "./login.scss";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { push } = useHistory();

  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginUser(user.uid));

        localStorage.setItem("user", JSON.stringify({ email, password }));
        push("/react-todo/");
      })
      .catch((err) => {
        console.log(err);
      });
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
      <Form
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
