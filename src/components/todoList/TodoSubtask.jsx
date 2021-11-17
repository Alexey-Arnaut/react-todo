import Input from "../ui/input";
import Todo from "./Todo";
import Button from "../ui/button";

const TodoSubtask = ({
  subtasksTitle,
  setSubtaskTitle,
  subtasks,
  addSubtask,
  remove,
  changeState,
  openModal,
}) => {
  return (
    <div className="todos__form-subtasks">
      <h2 className="todos__form-title">Подзадачи</h2>
      <div className="todos__form-inner">
        <Input
          name="Добавить подзадачу"
          value={subtasksTitle}
          setValue={setSubtaskTitle}
          type="text"
        />
        <Button onClick={addSubtask} className="todos__form-button">
          Добавить
        </Button>
      </div>
      {subtasks
        .slice()
        .sort((a, b) => a.time - b.time)
        .map((subtask) => (
          <Todo
            key={subtask.id}
            {...subtask}
            remove={remove}
            changeState={changeState}
            openModal={openModal}
          />
        ))}
    </div>
  );
};

export default TodoSubtask;
