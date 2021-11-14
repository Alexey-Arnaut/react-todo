import React from "react";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import FormAuthResetPassword from "../../components/formAuth/formAuthResetPassword";
import Message from "../../components/message";

import "./reset-password.scss";

const ResetPassword = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const resetPassword = async () => {
    if (email.trim().length > 0) {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email)
        .then(() => {
          setMessage("check-email");
        })
        .catch((err) => {
          setMessage(err.code);
          console.log(err.code);
        });
    } else {
      setMessage("empty-field-email");
    }
  };

  return (
    <div className="reset-password">
      <Message message={message} setMessage={setMessage} />
      <FormAuthResetPassword
        title="Сбросить пароль"
        btnName="Отправить письмо"
        link="/react-todo/login"
        linkName="Вернуться назад"
        setEmail={setEmail}
        onClick={resetPassword}
      />
    </div>
  );
};

export default ResetPassword;
