import Modal from "../ui/modal";
import Textarea from "../ui/textarea";
import Button from "../ui/button";

const TodoEditSubtask = ({
  active,
  setActive,
  value,
  setValue,
  changeNameSubtasks,
}) => {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="todos__form-edit">
        <h2 className="todos__form-title">Название задачи</h2>
        <Textarea
          name="Редактировть задачу"
          value={value}
          setValue={setValue}
        />
        <Button onClick={changeNameSubtasks} className="todos__form-button">
          Сохранить
        </Button>
      </div>
    </Modal>
  );
};

export default TodoEditSubtask;
