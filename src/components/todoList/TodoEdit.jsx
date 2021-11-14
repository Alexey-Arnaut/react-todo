import Modal from "../ui/modal";
import Button from "../ui/button";
import Textarea from "../ui/textarea";

const TodoEdit = ({
  active,
  setActive,
  changeName,
  title,
  setTitle,
  desc,
  setDesc,
  addDescription,
}) => {
  return (
    <Modal active={active} setActive={setActive}>
      <form className="todos__form" onSubmit={(e) => e.preventDefault()}>
        <div className="todos__form-edit">
          <h2 className="todos__form-title">Название задачи</h2>
          <Textarea
            name="Редактировть задачу"
            value={title}
            setValue={setTitle}
          />
          <Button onClick={changeName} className="todos__form-button">
            Сохранить
          </Button>
        </div>
        <div className="todos__form-description">
          <h2 className="todos__form-title">Описание задачи</h2>
          <Textarea
            name="Добавить описание задачи"
            value={desc}
            setValue={setDesc}
          />
          <Button onClick={addDescription} className="todos__form-button">
            Сохранить
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default TodoEdit;
