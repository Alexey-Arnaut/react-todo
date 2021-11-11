import React from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";
import { useHistory } from "react-router";

import Form from "../../components/form";

import "./registr.scss";

const Registr = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { push } = useHistory();

  const registr = () => {
    console.log(email, password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginUser(user.uid));

        localStorage.setItem("user", JSON.stringify({ email, password }));
        push("/react-todo/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="registr">
      <Form
        title="Зарегистрироваться"
        btnName="Зарегистрироваться"
        link="/react-todo/login"
        linkName="Войти"
        setEmail={setEmail}
        setPassword={setPassword}
        onClick={registr}
      />
    </div>
  );
};

export default Registr;
