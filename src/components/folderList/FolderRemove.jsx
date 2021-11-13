import Modal from "../ui/modal";
import Button from "../ui/button";

const FolderRemove = ({
  active,
  setActive,
  removeFolder,
  setActiveModalRemove,
}) => {
  return (
    <Modal active={active} setActive={setActive}>
      <h2 className="folders__title">
        Вы действительно хотите удалить папку и все задачи связанные с ней?
      </h2>
      <div className="folders__buttons">
        <Button onClick={removeFolder} className="folders__button">
          Да
        </Button>
        <Button
          onClick={() => setActiveModalRemove(false)}
          className="folders__button"
        >
          Нет
        </Button>
      </div>
    </Modal>
  );
};

export default FolderRemove;
