import FormAuth from "..";
import FormAuthHeader from "../formAuthHeader";
import FormAuthField from "../formAuthField";

const formAuthResetPassword = ({
  title,
  btnName,
  link,
  linkName,
  setEmail,
  onClick,
}) => {
  return (
    <FormAuth
      btnName={btnName}
      onClick={onClick}
      link={link}
      linkName={linkName}
    >
      <FormAuthHeader title={title} />
      <FormAuthField name="Введите email" type="email" setValue={setEmail} />
    </FormAuth>
  );
};

export default formAuthResetPassword;
