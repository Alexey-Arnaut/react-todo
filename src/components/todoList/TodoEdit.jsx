import Textarea from "../ui/textarea";
import Button from "../ui/button";

const TodoEdit = ({ changeName, todoTitle, setTodoTitle }) => {
  return (
    <div className="todos__form-edit">
      <h2 className="todos__form-title">Название задачи</h2>
      <Textarea
        name="Редактировть задачу"
        value={todoTitle}
        setValue={setTodoTitle}
      />
      <Button onClick={changeName} className="todos__form-button">
        Сохранить
      </Button>
    </div>
  );
};

export default TodoEdit;