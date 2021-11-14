import Modal from "../ui/modal";
import TodoEdit from "./TodoEdit";
import TodoDescription from "./TodoDescription";
import TodoSubtask from "./TodoSubtask";

const TodoModal = ({
  active,
  setActive,
  changeName,
  todoTitle,
  setTodoTitle,
  desc,
  setDesc,
  addDescription,
  subtasksTitle,
  setSubtaskTitle,
  subtasks,
  addSubtask,
  remove,
  changeState,
  openModal,
}) => {
  return (
    <>
      <Modal active={active} setActive={setActive}>
        <form
          className="todos__form"
          onSubmit={(e) => {
            e.preventDefault();
            addSubtask();
          }}
        >
          <TodoEdit
            changeName={changeName}
            todoTitle={todoTitle}
            setTodoTitle={setTodoTitle}
          />
          <TodoDescription
            desc={desc}
            setDesc={setDesc}
            addDescription={addDescription}
          />
          <TodoSubtask
            subtasksTitle={subtasksTitle}
            setSubtaskTitle={setSubtaskTitle}
            subtasks={subtasks}
            addSubtask={addSubtask}
            remove={remove}
            changeState={changeState}
            openModal={openModal}
          />
        </form>
      </Modal>
    </>
  );
};

export default TodoModal;
