import Modal from "../ui/modal";
import Textarea from "../ui/textarea";
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
      <div className="folders__form">
        <Textarea
          name="Название папки"
          value={value}
          setValue={setValue}
          type="text"
        />
        <Button onClick={onClick} className="folders__form-button">
          Сохранить
        </Button>
      </div>
    </Modal>
  );
};

export default FolderEdit;
