import FormAuth from "../";
import FormAuthField from "../formAuthField";
import FormAuthHeader from "../formAuthHeader";

const formAuthRegistr = ({
  title,
  btnName,
  link,
  linkName,
  setEmail,
  setPassword,
  setRepeatPassword,
  onClick,
}) => {
  return (
    <FormAuth
      btnName={btnName}
      link={link}
      linkName={linkName}
      onClick={onClick}
    >
      <FormAuthHeader title={title} />
      <FormAuthField name="Введите email" type="email" setValue={setEmail} />
      <FormAuthField
        name="Введите пароль"
        type="password"
        setValue={setPassword}
      />
      <FormAuthField
        name="Повторите пароль"
        type="password"
        setValue={setRepeatPassword}
      />
    </FormAuth>
  );
};

export default formAuthRegistr;
