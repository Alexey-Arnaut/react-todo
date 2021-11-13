import Modal from "../ui/modal";
import Input from "../ui/input";
import Button from "../ui/button";

const FolderEdit = ({
  active,
  setActive,
  value,
  setValue,
  onSubmit,
  onClick,
}) => {
  return (
    <Modal active={active} setActive={setActive}>
      <form className="folders__form" onSubmit={onSubmit}>
        <Input
          name="Название папки"
          value={value}
          setValue={setValue}
          type="text"
        />
        <Button onClick={onClick} className="folders__form-button">
          Сохранить
        </Button>
      </form>
    </Modal>
  );
};

export default FolderEdit;
