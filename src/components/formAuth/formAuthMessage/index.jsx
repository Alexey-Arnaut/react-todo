import React from "react";

import "./form-auth-message.scss";

const FormAuthMessage = ({ message, setMessage }) => {
  React.useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message, setMessage]);

  return (
    <>
      {message && (
        <div
          className={`message ${
            message === "check-email" && "message--succes"
          }`}
        >
          {message === "auth/user-not-found" && <p>Пользователь не найден</p>}
          {message === "auth/wrong-password" && <p>Неверный пароль</p>}
          {message === "empty-field-email" && <p>Поле "email" пустое</p>}
          {message === "empty-field-password" && <p>Поле "пароль" пустое</p>}
          {message === "wrong-repeat-password" && <p>Пароли не совпадают</p>}
          {message === "auth/invalid-email" && <p>Некорректный email</p>}
          {message === "auth/weak-password" && <p>Слишком короткий пароль</p>}
          {message === "auth/email-already-in-use" && (
            <p>Такой пользовтель уже существует</p>
          )}
          {message === "check-email" && <p>Проверьте вашу почту</p>}
        </div>
      )}
    </>
  );
};

export default FormAuthMessage;
